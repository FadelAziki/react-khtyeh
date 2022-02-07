import React from 'react';

const NameList = () => {
  const maListe = ['Gio', 'Al', 'Za', 'Mo'];

  return (
    <ul>
      {maListe.map(prenom => 
        <li>{prenom}</li>
      )}
    </ul>
  );
};

export default NameList;
