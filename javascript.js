window.onload = async function() {
    const response1 = await fetch('https://nregastrep.nic.in/Netnrega/writereaddata/state_out/gp_commulative_report1_1602006004_local_2223.html');
    const html1 = await response1.text();
    const parser1 = new DOMParser();
    const doc1 = parser1.parseFromString(html1, "text/html");
    const tables1 = doc1.querySelectorAll("table");
  
    const response2 = await fetch('https://mnregaweb4.nic.in/netnrega/citizen_html/demregister.aspx?lflag=eng&page=B&state_name=KERALA&state_code=16&district_name=KANNUR&district_code=1602&block_name=Kuthuparamba&block_code=1602006&fin_year=2022-2023&source=national&Digest=7DZI/4V7E/x+VOz3Tz8ZEQ');
    const html2 = await response2.text();
    const parser2 = new DOMParser();
    const doc2 = parser2.parseFromString(html2, "text/html");
    const tables2 = doc2.querySelectorAll("table");
  
    const mergedTable = [...tables1, ...tables2];
    const objectsArray = [];
    for (let i = 0; i < mergedTable.length; i++) {
      const table = mergedTable[i];
      const rows = table.rows;
  
      for (let j = 0; j < rows.length; j++) {
        const cells = rows[j].cells;
        for (let k = 0; k < cells.length; k++) {
          if (cells[k].textContent.trim() === 'Mangattidam') {
            const obj = Array.from(cells).reduce((acc, cell) => {
              acc[cell.textContent.trim()] = cell.textContent.trim();
              return acc;
            }, {});
            
            console.log(obj);
            objectsArray.push(obj);
            const combinedObject = { ...objectsArray[0], ...objectsArray[1] };
            const fobj = Object.values(combinedObject)
            console.log(combinedObject);
            document.getElementById("mandays").textContent = fobj[Object.keys(fobj)[19]];
            document.getElementById("100days").textContent = obj[Object.keys(obj)[5]];
            document.getElementById("household").textContent = obj[Object.keys(obj)[15]];
            document.getElementById("expndtr").textContent = fobj[Object.keys(fobj)[21]];
            console.log(fobj);
            break;
          }
        }
      }
    } 
  };
  
