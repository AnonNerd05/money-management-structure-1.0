fetch('http://localhost:3000/visit');


function saveIncome() {
const income = document.getElementById('income').value;
if (income <= 0) return alert('Enter a valid amount');
sessionStorage.setItem('income', income);
window.location.href = 'invest.html';
}


function saveInvest() {
const invest = document.getElementById('invest').value;
if (invest < 0 || invest > 100) return alert('Invalid percentage');
sessionStorage.setItem('invest', invest);
window.location.href = 'save.html';
}


function saveSave() {
const save = Number(document.getElementById('save').value);
const invest = Number(sessionStorage.getItem('invest'));


if (isNaN(save) || save < 0 || save > 60) {
document.getElementById('error').innerText = 'Savings must be between 0% and 60%';
return;
}


if (invest < 0 || invest > 60) {
document.getElementById('error').innerText = 'Investment must be between 0% and 60%';
return;
}


if (save + invest > 100) {
document.getElementById('error').innerText = 'Savings and investment combined cannot exceed 100%';
return;
}


sessionStorage.setItem('save', save);
window.location.href = 'result.html';
}


if (window.location.pathname.includes('result')) {
const income = Number(sessionStorage.getItem('income'));
const invest = Number(sessionStorage.getItem('invest'));
const save = Number(sessionStorage.getItem('save'));
const spend = 100 - (invest + save);


document.getElementById('result').innerHTML = `
<p>Spending: ${spend}% (₦${(income * spend / 100).toFixed(2)})</p>
<p>Savings: ${save}% (₦${(income * save / 100).toFixed(2)})</p>
<p>Investment: ${invest}% (₦${(income * invest / 100).toFixed(2)})</p>
`;
}