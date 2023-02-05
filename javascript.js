window.onload = async function() {
    const response = await fetch('https://mnregaweb4.nic.in/netnrega/citizen_html/demregister.aspx?lflag=eng&page=B&state_name=KERALA&state_code=16&district_name=KANNUR&district_code=1602&block_name=Kuthuparamba&block_code=1602006&fin_year=2022-2023&source=national&Digest=7DZI/4V7E/x+VOz3Tz8ZEQ');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const tables = doc.querySelectorAll("table");

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;

        for (let j = 0; j < rows.length; j++) {
            const cells = rows[j].cells;
            for (let k = 0; k < cells.length; k++) {
                if (cells[k].textContent.trim() === 'Mangattidam') {
                    const obj = Array.from(cells).reduce((acc, cell) => {
                        acc[cell.textContent.trim()] = cell.textContent.trim();
                        return acc;
                    }, {});
                    document.getElementById("mandays").textContent = obj[Object.keys(obj)[17]];
                    document.getElementById("100days").textContent = obj[Object.keys(obj)[4]];
                    document.getElementById("household").textContent = obj[Object.keys(obj)[15]];
                    console.log(obj)
                    break;
                }
            }
        }
    }
};



// window.onload = async function() {
//     const urls = [
//         'https://mnregaweb4.nic.in/netnrega/citizen_html/demregister.aspx?lflag=eng&page=B&state_name=KERALA&state_code=16&district_name=KANNUR&district_code=1602&block_name=Kuthuparamba&block_code=1602006&fin_year=2022-2023&source=national&Digest=7DZI/4V7E/x+VOz3Tz8ZEQ',
//         'https://mnregaweb4.nic.in/netnrega/dpc_sms_new.aspx?lflag=eng&page=b&state_name=KERALA&state_code=16&district_name=KANNUR&district_code=1602&block_name=Kuthuparamba&block_code=1602006&fin_year=2022-2023&wrkcat=ALL&dt=&Digest=qfDTrCO6G0YNe40FwDRcnw'
//     ];

//     for (const url of urls) {
//         const response = await fetch(url);
//         const html = await response.text();
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const tables = doc.querySelectorAll("table");

//         for (let i = 0; i < tables.length; i++) {
//             const table = tables[i];
//             const rows = table.rows;

//             for (let j = 0; j < rows.length; j++) {
//                 const cells = rows[j].cells;
//                 for (let k = 0; k < cells.length; k++) {
//                     if (cells[k].textContent.trim() === 'Mangattidam') {
//                         console.log(Array.from(cells).reduce((acc, cell) => {
//                             acc[cell.textContent.trim()] = cell.textContent.trim();
//                             return acc;
//                         }, {}));
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// };


