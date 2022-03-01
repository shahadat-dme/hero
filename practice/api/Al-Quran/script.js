let displayCard = async () => {
    //   fetching list of data for card
    let req = await fetch("http://api.alquran.cloud/v1/quran/en.asad");
    let data = await req.json();
    let surahs = data.data.surahs;
    console.log(surahs);
    let cards = document.getElementById("cards");
    for (const surah of surahs) {
      let r = pickColor();
      let g = pickColor();
      let b = pickColor();
      let color = `rgb(${r}, ${g}, ${b})`;
      let card = `
    <div class="card" style="background-color: ${color};">
            <div class="card-body">
              <div>
                <strong>Arabic name:</strong>
                <span style="font-size: 30px; font-weight: bold"> ${surah.name} </span>
              </div>
              <div>
                <strong>English name:</strong>
                <span style="font-size: 30px; font-weight: bold">${surah.englishName}</span>
              </div>
              <div>
                <strong>English Translation:</strong>
                <span style="font-size: 30px; font-weight: bold">${surah.englishNameTranslation}</span>
              </div>
              <div>
                <strong>Ayahs:</strong>
                <span style="font-size: 30px; font-weight: bold">${surah.ayahs.length}</span>
              </div>
              <div class="text-center">
                <button class="btn btn-primary" onclick="showModal(${surah.number})"
                  >Go somewhere</button
                >
              </div>
            </div>
          </div>
    `;
      let div = document.createElement("div");
      div.innerHTML = card;
      cards.appendChild(div);
    }
  };
  displayCard();
  let fuu = () => {
    console.log(this);
  };
  
  function pickColor() {
    let r = Math.random() * 255;
    r = Math.floor(r);
    return r;
  }
  function btnClose() {
    let getModal = document.getElementById("modal");
    getModal.style.display = "none";
  }
  function showModal(id) {
    let getModal = document.getElementById("modal");
    getModal.style.display = "block";
    showAyah(id);
  }
  
  let showAyah = async (id) => {
    // fetch arabic
    let tableBody = document.getElementById("table-body");
  
    let arRes = await fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.asad`);
    let enRes = await fetch(`https://api.alquran.cloud/v1/surah/${id}/en.asad`);
    let arData = await arRes.json();
    let enData = await enRes.json();
    arAyahs = arData.data.ayahs;
    enAyahs = enData.data.ayahs;
    console.log(enAyahs);
    for (ayah of arAyahs) {
      let tr = document.createElement("tr");
      let td = `
      <td scope="row">${ayah.numberInSurah}</td>
      
      <td>${ayah.text}</td>
      `;
      tr.innerHTML = td;
      tableBody.appendChild(tr);
    }
  };