 document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // جلوگیری از ریفرش صفحه

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const address = document.querySelector("textarea").value;

    const genderInputs = document.querySelectorAll('input[name="gender"]');
    let gender = "";
    genderInputs.forEach(input => {
      if (input.checked) {
        gender = input.nextSibling.textContent.trim();
      }
    });

    const city = document.querySelectorAll("select")[0].value;
    const province = document.querySelectorAll("select")[1].value;

    const checkboxes = document.querySelectorAll('.cbx');
    const interests = [];
    checkboxes.forEach(box => {
      if (box.checked) {
        interests.push(box.parentElement.textContent.trim());
      }
    });

    const fileInput = document.querySelector('input[type="file"]');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "فایلی انتخاب نشده";

    // ساختن و نمایش نتیجه
    let result = `
      <h3>اطلاعات ثبت‌شده:</h3>
      <p>نام کاربری: ${username}</p>
      <p>رمز عبور: ${password}</p>
      <p>ایمیل: ${email}</p>
      <p>آدرس: ${address}</p>
      <p>جنسیت: ${gender}</p>
      <p>شهر: ${city}</p>
      <p>استان: ${province}</p>
      <p>علاقه‌مندی‌ها: ${interests.join("، ")}</p>
      <p>نام فایل: ${fileName}</p>
    `;

    const displayDiv = document.createElement("div");
    displayDiv.innerHTML = result;
    displayDiv.style.border = "2px solid #ccc";
    displayDiv.style.marginTop = "20px";
    displayDiv.style.padding = "10px";

    document.querySelector(".body").appendChild(displayDiv);
  });