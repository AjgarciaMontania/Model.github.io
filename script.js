document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calcularBtn").addEventListener("click", () => {
    // Obtener valores ingresados por el usuario
    const data = [1, 2, 3, 4].map(day => {
      return {
        dia: day,
        curso1: parseFloat(document.getElementById(`curso1_dia${day}`).value) || 0,
        curso2: parseFloat(document.getElementById(`curso2_dia${day}`).value) || 0,
        curso3: parseFloat(document.getElementById(`curso3_dia${day}`).value) || 0,
        curso4: parseFloat(document.getElementById(`curso4_dia${day}`).value) || 0
      };
    });

    const createTableOriginal = () => {
      return `
        <table>
          <thead>
            <tr>
              <th>Día de Estudio</th>
              <th>Curso 1</th>
              <th>Curso 2</th>
              <th>Curso 3</th>
              <th>Curso 4</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(row => `
              <tr>
                <td>${row.dia}</td>
                <td>${row.curso1}</td>
                <td>${row.curso2}</td>
                <td>${row.curso3}</td>
                <td>${row.curso4}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    };

    const maxInRow = (row) => {
      const values = [row.curso1, row.curso2, row.curso3, row.curso4];
      const maxValue = Math.max(...values.filter(value => !isNaN(value)));
      const indices = values
        .map((value, index) => value === maxValue ? index + 1 : -1)
        .filter(index => index !== -1)
        .join('-');
      return { maxValue, indices };
    };

    const Tabla4 = (Curso4D1, Curso4D2, Curso4D3, Curso4D4) => {
      const rows = [
        { dia: 1, curso1: Curso4D1, curso2: '-', curso3: '-', curso4: '-', ...maxInRow({ curso1: Curso4D1, curso2: '-', curso3: '-', curso4: '-' }) },
        { dia: 2, curso1: Curso4D1, curso2: Curso4D2, curso3: '-', curso4: '-', ...maxInRow({ curso1: Curso4D1, curso2: Curso4D2, curso3: '-', curso4: '-' }) },
        { dia: 3, curso1: Curso4D1, curso2: Curso4D2, curso3: Curso4D3, curso4: '-', ...maxInRow({ curso1: Curso4D1, curso2: Curso4D2, curso3: Curso4D3, curso4: '-' }) },
        { dia: 4, curso1: Curso4D1, curso2: Curso4D2, curso3: Curso4D3, curso4: Curso4D4, ...maxInRow({ curso1: Curso4D1, curso2: Curso4D2, curso3: Curso4D3, curso4: Curso4D4 }) }
      ];

      return `
        <table>
          <thead>
            <tr>
              <th>Día de Estudio</th>
              <th>Curso 1</th>
              <th>Curso 2</th>
              <th>Curso 3</th>
              <th>Curso 4</th>
              <th>F*</th>
              <th>X*</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr>
                <td>${row.dia}</td>
                <td>${row.curso1}</td>
                <td>${row.curso2}</td>
                <td>${row.curso3}</td>
                <td>${row.curso4}</td>
                <td>${row.maxValue}</td>
                <td>${row.indices}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    };

    const Tabla3 = () => {
      const rows = [
        { dia: 2, curso1: data[0].curso3 + data[0].curso4, curso2: '-', curso3: '-', curso4: '-' },
        { dia: 3, curso1: data[0].curso3 + data[1].curso4, curso2: data[1].curso3 + data[0].curso4, curso3: '-', curso4: '-' },
        { dia: 4, curso1: data[0].curso3 + data[2].curso4, curso2: data[1].curso3 + data[1].curso4, curso3: data[2].curso3 + data[0].curso4, curso4: '-' },
        { dia: 5, curso1: data[0].curso3 + data[3].curso4, curso2: data[1].curso3 + data[2].curso4, curso3: data[2].curso3 + data[1].curso4, curso4: data[3].curso3 + data[0].curso4 }
      ];

      const rowsWithMax = rows.map(row => ({
        ...row,
        ...maxInRow(row)
      }));

      return rowsWithMax;
    };




    const Tabla33 = () => {
      const rows = [
          { day: 2, curso1: data[0].curso3 + data[0].curso4, curso2: '-', curso3: '-', curso4: '-' },
          { day: 3, curso1: data[0].curso3 + data[1].curso4, curso2: data[1].curso3 + data[0].curso4, curso3: '-', curso4: '-' },
          { day: 4, curso1: data[0].curso3 + data[2].curso4, curso2: data[1].curso3 + data[1].curso4, curso3: data[2].curso3 + data[0].curso4, curso4: '-' },
          { day: 5, curso1: data[0].curso3 + data[3].curso4, curso2: data[1].curso3 + data[2].curso4, curso3: data[2].curso3 + data[1].curso4, curso4: data[3].curso3 + data[0].curso4 }
      ];
    
      const rowsWithMax = rows.map(row => ({
          ...row,
          ...maxInRow(row)
      }));
    
      return `
          <table>
              <thead>
                  <tr>
                      <th>Día de Estudio</th>
                      <th>Curso 1</th>
                      <th>Curso 2</th>
                      <th>Curso 3</th>
                      <th>Curso 4</th>
                      <th>F*</th>
                      <th>X*</th>
                  </tr>
              </thead>
              <tbody>
                  ${rowsWithMax.map(row => `
                      <tr>
                          <td>${row.day}</td>
                          <td>${row.curso1}</td>
                          <td>${row.curso2}</td>
                          <td>${row.curso3}</td>
                          <td>${row.curso4}</td>
                          <td>${row.maxValue}</td>
                          <td>${row.indices}</td>
                      </tr>
                  `).join('')}
              </tbody>
          </table>
      `;
    };
      
    const rowsWithMax = Tabla3();





    const Tabla2 = () => {
      const rows = [
        { dia: 3, curso1: data[0].curso2 + rowsWithMax[0].maxValue, curso2: '-', curso3: '-', curso4: '-' },
        { dia: 4, curso1: data[0].curso2 + rowsWithMax[1].maxValue, curso2: data[1].curso2 + rowsWithMax[0].maxValue, curso3: '-', curso4: '-' },
        { dia: 5, curso1: data[0].curso2 + rowsWithMax[2].maxValue, curso2: data[1].curso2 + rowsWithMax[1].maxValue, curso3: data[2].curso2 + rowsWithMax[0].maxValue, curso4: '-' },
        { dia: 6, curso1: data[0].curso2 + rowsWithMax[3].maxValue, curso2: data[1].curso2 + rowsWithMax[2].maxValue, curso3: data[2].curso2 + rowsWithMax[1].maxValue, curso4: data[3].curso2 + rowsWithMax[0].maxValue }
      ];

      const rowsWithMax3 = rows.map(row => ({
        ...row,
        ...maxInRow(row)
      }));

      return `
        <table>
          <thead>
            <tr>
              <th>Día de Estudio</th>
              <th>Curso 1</th>
              <th>Curso 2</th>
              <th>Curso 3</th>
              <th>Curso 4</th>
              <th>F*</th>
              <th>X*</th>
            </tr>
          </thead>
          <tbody>
            ${rowsWithMax3.map(row => `
              <tr>
                <td>${row.dia}</td>
                <td>${row.curso1}</td>
                <td>${row.curso2}</td>
                <td>${row.curso3}</td>
                <td>${row.curso4}</td>
                <td>${row.maxValue}</td>
                <td>${row.indices}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    };

    const Tabla22 = () => {
      const rows = [
          { dia: 3, curso1: data[0].curso2 + rowsWithMax[0].maxValue, curso2: '-', curso3: '-', curso4: '-' },
          { dia: 4, curso1: data[0].curso2 + rowsWithMax[1].maxValue, curso2: data[1].curso2 + rowsWithMax[0].maxValue, curso3: '-', curso4: '-' },
          { dia: 5, curso1: data[0].curso2 + rowsWithMax[2].maxValue, curso2: data[1].curso2 + rowsWithMax[1].maxValue, curso3: data[2].curso2 + rowsWithMax[0].maxValue, curso4: '-' },
          { dia: 6, curso1: data[0].curso2 + rowsWithMax[3].maxValue, curso2: data[1].curso2 + rowsWithMax[2].maxValue, curso3: data[2].curso2 + rowsWithMax[1].maxValue, curso4: data[3].curso2 + rowsWithMax[0].maxValue }
      ];
      const rowsWithMax2 = rows.map(row => ({ ...row, ...maxInRow(row) }));
      return rowsWithMax2;
  };

  const rowsWithMax4 = Tabla22();



    const Tabla1 = () => {
      const rows = [
      { dia: 7, curso1: data[0].curso1 + rowsWithMax4[3].maxValue, curso2: data[1].curso1 + rowsWithMax4[2].maxValue, curso3: data[2].curso1 + rowsWithMax4[1].maxValue, curso4: data[3].curso1 + rowsWithMax4[0].maxValue },
      ];

      const rowsWithMax2 = rows.map(row => ({
        ...row,
        ...maxInRow(row)
      }));
      // Obtener el valor máximo de la tabla 1
      const maxValueTabla1 = Math.max(...rowsWithMax2.map((row) => row.maxValue));

      return `
        <table>
          <thead>
            <tr>
              <th>Día de Estudio</th>
              <th>Curso 1</th>
              <th>Curso 2</th>
              <th>Curso 3</th>
              <th>Curso 4</th>
              <th>F*</th>
              <th>X*</th>
            </tr>
          </thead>
          <tbody>
            ${rowsWithMax2.map(row => `
              <tr>
              <td>${row.dia}</td>
              <td>${row.curso1}</td>
              <td>${row.curso2}</td>
              <td>${row.curso3}</td>
              <td>${row.curso4}</td>
              <td>${row.maxValue}</td>
              <td>${row.indices}</td>
              </tr>
              `).join('')}
              
              </tbody>
              </table>
              <h2 id="maximoTabla1">PUNTOS MAXIMOS ESTIMADOS: ${maxValueTabla1}</h2>
              `;
              
            };
            
            
            
    const container = document.getElementById("tablesContainer");
    
    container.innerHTML = `

      <h2>Tabla Original</h2>
      ${createTableOriginal()}
      <h2>ET4 ASIGNAR DIAS AL CURSO 4</h2>
      ${Tabla4(
        parseFloat(document.getElementById('curso4_dia1').value),
        parseFloat(document.getElementById('curso4_dia2').value),
        parseFloat(document.getElementById('curso4_dia3').value),
        parseFloat(document.getElementById('curso4_dia4').value)
      )}
      <h2>ET3= ASIGNAR DIAS AL CURSO 3</h2>
      ${Tabla33()}
      <h2>ET2= ASIGNAR DIAS AL CURSO 2</h2>
      ${Tabla2()}
      <h2>ET1= ASIGNAR DIAS AL CURSO 1</h2>
      ${Tabla1()} 
    `;
  });
});
