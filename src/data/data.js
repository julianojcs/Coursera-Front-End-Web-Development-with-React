import chroma from 'chroma-js';
import React from 'react';

export const optionsAmericas = [
    { id: 'EN', value: 'English', label: 'English', color: '#00B8D9', isFixed: true },
    { id: 'SP', value: 'Spanish', label: 'Spanish', color: '#0052CC', isDisabled: true },
    { id: 'BR', value: 'Brazilian Portuguese', label: 'Brazilian Portuguese', color: '#FF8B00' }
];

export const optionsEurope = [
    { id: 'FR', value: 'France', label: 'France', color: '#00B8D9', isFixed: false },
    { id: 'GE', value: 'German', label: 'German', color: '#0052CC', isDisabled: true },
    { id: 'IT', value: 'Italy', label: 'Italy', color: '#5243AA' },
    { id: 'PT', value: 'Portuguese', label: 'Portuguese', color: '#FF5630', isFixed: false },
];
  
export const groupedOptions = [
    { label: 'Europe', color: '#00875A', options: optionsEurope, },
    { label: 'Americas', color: '#253858', options: optionsAmericas, },
];


export const DEFAULTVALUES = {
    firstName: 'Juliano',
    lastName: 'Silva' 
};

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};
const groupLabelStyles = {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bolder',
    textDecoration: 'underline'
};

export const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span style={groupLabelStyles}>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


export const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
});
  
export const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles, paddingLeft: 24, 
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return data.isFixed ? { ...styles, backgroundColor: 'gray' } : { ...styles, backgroundColor: color.alpha(0.1).css() };
    },
    multiValueLabel: (styles, { data }) => {
        return data.isFixed ? { ...styles,  fontWeight: 'bold', color: 'white', paddingRight: 6 } : { ...styles, color: data.color };
    },
    multiValueRemove: (styles, { data }) => {
        return data.isFixed 
            ? { ...styles,  display: 'none' } 
            : { ...styles, color: data.color,
                ':hover': {
                backgroundColor: data.color,
                color: 'white',
                } };
    },
  };