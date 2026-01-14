const socket = io();
const roomId = new URLSearchParams(window.location.search).get("room");

const peers = {};
const localVideo = document.createElement("video");
localVideo.autoplay = true;
localVideo.muted = true;

const videos = document.getElementById("videos");

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
.then(stream => {
  localVideo.srcObject = stream;
  videos.appendChild(localVideo);

  socket.emit("join-room", roomId);

  socket.on("all-users", users => {
    users.forEach(id => createPeer(id, stream));
  });

  socket.on("user-joined", id => {
    createPeer(id, stream);
  });

  socket.on("signal", data => {
    peers[data.from].signal(data.signal);
  });
});

function createPeer(userId, stream) {
  const peer = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
  });

  stream.getTracks().forEach(track => peer.addTrack(track, stream));

  peer.ontrack = e => {
    const video = document.createElement("video");
    video.srcObject = e.streams[0];
    video.autoplay = true;
    videos.appendChild(video);
  };

  peer.onicecandidate = e => {
    if (e.candidate) {
      socket.emit("signal", {
        to: userId,
        signal: e.candidate
      });
    }
  };

  peers[userId] = peer;
}
