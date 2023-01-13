var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var largura=6;

contexto.beginPath();
contexto.strokeStyle="blue";
contexto.lineWidth=largura;
contexto.arc(180, 200, 100, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.lineWidth=largura;
contexto.arc(410, 200, 100, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="red";
contexto.lineWidth=largura;
contexto.arc(640, 200, 100, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="yellow";
contexto.lineWidth=largura;
contexto.arc(280, 330, 100, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="green";
contexto.lineWidth=largura;
contexto.arc(530, 330, 100, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="grey";
contexto.lineWidth=largura;
contexto.rect(50, 70, 720, 400);
contexto.stroke();