document.addEventListener("DOMContentLoaded", () => {
  const ageForm = document.getElementById("ageForm");
  const result = document.getElementById("result");

  ageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // Months are 0-indexed
    const year = parseInt(document.getElementById("year").value);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    result.textContent = `You are ${age} years old.`;
  });
});
