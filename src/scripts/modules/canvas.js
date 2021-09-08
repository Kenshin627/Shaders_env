export function cityRelation() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(0.5 * canvas.width, 0.5 * canvas.height, 100, 100);
  ctx.fill();
}
