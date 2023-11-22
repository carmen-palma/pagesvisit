let visitCount = localStorage.getItem('visitCount') || 0;

document.getElementById('contadorVisitas').textContent = visitCount;

visitCount++;
localStorage.setItem('visitCount', visitCount);

document.getElementById('btnReestablecer').addEventListener('click', function() {
  localStorage.removeItem('visitCount'); 
  visitCount = 0;
  document.getElementById('contadorVisitas').textContent = visitCount;
});