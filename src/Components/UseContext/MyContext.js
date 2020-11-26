import React from 'react';

export const MyContext = React.createContext();

export const ColorContext = React.createContext(); //on utilise plusieurs Context qu'on import dans l'element 
//que l'on souhaite avoir en element principal (le plus haut) pour utiliser les contexts. (ici Abre).