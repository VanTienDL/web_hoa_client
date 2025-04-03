async function searchFlower() {
    let id = document.getElementById("flowerName").value;  // Lấy ID nhập vào

    try {
        let response = await fetch(`https://smart-starlene-phuongdinh-f2ad82cf.koyeb.app/api/flower?id=${id}`);
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
