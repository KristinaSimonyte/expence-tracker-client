import React from 'react';
import TextInput from './TextInput';

export default {
  title: "TextInput",
  component: TextInput,
};

export const Default = () => (
<TextInput 
name="name"
label="Name"
placeholder="Name"
handleChange={(value) => {

}}
/>
);