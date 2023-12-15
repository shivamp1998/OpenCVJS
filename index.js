const imgElement = document.querySelector('#imageSrc');
const inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change",(e)=> {
    const url = URL.createObjectURL(e.target.files[0]);
    imgElement.src = url;
})




imgElement.onload = () => {
    let mat = cv.imread(imgElement);
    cv.imshow('#imgCanvas')
}