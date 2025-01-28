import React, { useState } from 'react';


function Mudança() {
    return ( 
<div className='container'>
      <div id='titulo'>
        <h1>Seletor de cor de fundo</h1>
      </div>

          <div id='cor'>
           <select name="escolha" id="cor-de-fundo">
            <option value="Preto">Preto</option>
            <option value="Branco">Branco</option>
           </select>
          </div>
</div>
    )
}

export default Mudança;