// Get UI Container Value
const phoneContainer = document.getElementById("phone-container");
const singlePhoneContainer = document.getElementById("single-phone-container");
const spinner = document.getElementById("spinner");
const error = document.getElementById("error");
const showButton = document.getElementById("taggle-on-button");
const clossButton = document.getElementById("taggle-of-button");
const restItem = document.getElementById("rest-phone");

// Load Phones API
const loadPhone = () => {
  const inputField = document.getElementById("search-text");
  const searchText = inputField.value.toLowerCase();
  loadApi(searchText);
  inputField.value = "";
};

// Fetch api Data
const loadApi = (searchText) => {
  // Empty Previus Value
  error.innerHTML = "";
  phoneContainer.innerHTML = "";
  singlePhoneContainer.innerHTML = "";
  spinner.classList.remove("d-none");
  showButton.classList.add("d-none");
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};

const defoultValue = () => {
  phoneContainer.innerHTML = "";
  singlePhoneContainer.innerHTML = "";
  error.innerHTML = "";
  spinner.classList.add("d-none");
  showButton.classList.add("d-none");
  clossButton.classList.add("d-none");
  restItem = "";
};

// Show Phones in UI
const displayPhones = (phones) => {
  if (phones.length == 0) {
    spinner.classList.add("d-none");
    error.innerText = "No Data Found. Please!! Provide a valid input";
    showButton.classList.add("d-none");
    clossButton.classList.add("d-none");
  } else {
    spinner.classList.add("d-none");
    error.innerText = `Total: ${phones.length} Data Found`;
    const twentyPhone = phones.slice(0, 20);

    // Loop throw on only twenty phones and show in ui
    twentyPhone.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card shadow-lg p-4">
            <div class="w-50 mx-auto">
                <img
                src="${phone.image}"
                class="card-img-top img-fluid"
                alt="..."
                />            
            </div>
            <div class="card-body">
                <h4 class="text-center">${phone.phone_name}</h4>
                <p class="text-center">${phone.brand}</p>
            </div>
            <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success">Show Details</button>
        </div>
      `;
      phoneContainer.appendChild(div);
    });
    // show remainig phone
    const remainingPhone = phones.slice(20, phones.length);
    if (remainingPhone != 0) {
      showButton.classList.remove("d-none");
      clossButton.classList.add("d-none");
      restItem.innerHTML = "";
      remainingPhone.forEach((phone) => {
        const div2 = document.createElement("div");
        div2.classList.add("col");
        div2.innerHTML = `
          <div class="card shadow-lg p-4">
              <div class="w-50 mx-auto">
                  <img
                  src="${phone.image}"
                  class="card-img-top img-fluid"
                  alt="..."
                  />            
              </div>
              <div class="card-body">
                  <h4 class="text-center">${phone.phone_name}</h4>
                  <p class="text-center">${phone.brand}</p>
              </div>
              <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success">Show Details</button>
          </div>
        `;
        restItem.appendChild(div2);
      });
    } else {
      showButton.classList.add("d-none");
      clossButton.classList.add("d-none");
    }
  }
};

// Load Single Phone
const loadPhoneDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhoneDetails(data.data));
};

// Show single Phone in UI
const showPhoneDetails = (phone) => {
  singlePhoneContainer.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("p-4");
  div.innerHTML = `
    <div class="w-50 mx-auto">
        <img
            src="${phone?.image}"
            class="card-img-top img-fluid"
            alt="..."
        />
    </div>
    <h3 class="card-title text-center">${phone?.name} </h3>
    <div class="card-body">
        <div class="row bg-success text-light">
            <strong class="col-12 border p-2">Main Features</strong>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">First Release</strong>
            <span class="col-8 border p-2">${
              phone?.releaseDate ? phone?.releaseDate : "No release Date found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Storage</strong>
            <span class="col-8 border p-2">${
              phone.mainFeatures?.storage
                ? phone.mainFeatures?.storage
                : "no storage found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Display size</strong>
            <span class="col-8 border p-2">${
              phone?.mainFeatures?.displaySize
                ? phone?.mainFeatures?.displaySize
                : "no display information found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Chipset</strong>
            <span class="col-8 border p-2">${
              phone?.mainFeatures?.chipSet
                ? phone?.mainFeatures?.chipSet
                : "No Chipset information found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Memory</strong>
            <span class="col-8 border p-2">${
              phone?.mainFeatures?.memory
                ? phone?.mainFeatures?.memory
                : "No Memory Information found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Sensors</strong>
            <span class="col-8 border p-2">${
              phone?.mainFeatures?.sensors
                ? phone?.mainFeatures?.sensors.join(", ")
                : "No Sensors information found"
            }</span>
        </div>
        <div class="row bg-secondary text-light">
            <strong class="col-12 border p-2">Others</strong>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">WLAN</strong>
            <span class="col-8 border p-2">${
              phone?.others?.WLAN
                ? phone?.others?.WLAN
                : "No WLAN information Found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Bluetooth</strong>
            <span class="col-8 border p-2">${
              phone?.others?.Bluetooth
                ? phone?.others?.Bluetooth
                : "No Bluetooth information Found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">GPS</strong>
            <span class="col-8 border p-2">${
              phone?.others?.GPS
                ? phone?.others?.GPS
                : "No GPS information Found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">NFC</strong>
            <span class="col-8 border p-2">${
              phone?.others?.NFC
                ? phone?.others?.NFC
                : "No NFC information Found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">Radio</strong>
            <span class="col-8 border p-2">${
              phone?.others?.Radio
                ? phone?.others?.Radio
                : "No Radio information Found"
            }</span>
        </div>
        <div class="row">
            <strong class="col-4 border p-2">USB</strong>
            <span class="col-8 border p-2">${
              phone?.others?.USB
                ? phone?.others?.USB
                : "No USB information found"
            }</span>
        </div>
    </div>
  `;
  singlePhoneContainer.appendChild(div);
};

const showRemaining = () => {
  restItem.classList.remove("d-none");
  clossButton.classList.remove("d-none");
  showButton.classList.add("d-none");
};

const coloseRemaining = () => {
  restItem.classList.add("d-none");
  showButton.classList.remove("d-none");
  clossButton.classList.add("d-none");
};
