async function searchFlower() {
    let id = document.getElementById("flowerName").value;  // Lấy ID nhập vào

    try {
        let response = await fetch(`https://zeroth-rori-phuongdinh-58a55705.koyeb.app/api/flower?id=${id}`);
        let data = await response.json();

        let resultName = document.getElementById("result-name");
        let resultImage = document.getElementById("result-image");
        let resultText = document.getElementById("result-text");

        if (data.name) {
            resultName.textContent = data.name;
            resultImage.src = data.image;
            resultImage.alt = data.name;
            resultText.textContent = data.description;
        } else {
            resultName.textContent = "Flower not found";
            resultImage.src = "";
            resultText.textContent = "";
        }
    } catch (error) {
        console.error("Error fetching flower:", error);
    }
}
async function multiplyNumber() {
    let num = document.getElementById("multiplyNumber").value;

    if (num <= 0 || isNaN(num)) {
        document.getElementById("multiply-result").textContent = "Xin hãy nhập số không âm!";
        return;
    }

    try {
        let response = await fetch(`https://zeroth-rori-phuongdinh-58a55705.koyeb.app/api/multiply?num=${num}`);
        let data = await response.json();

        document.getElementById("multiply-result").textContent = `Thành Tiền: ${data.result}k`;
    } catch (error) {
        console.error("Error fetching multiplication result:", error);
    }
}

