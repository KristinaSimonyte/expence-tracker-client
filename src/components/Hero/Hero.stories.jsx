import React from 'react';
import Hero from "./Hero";

export default {
    title: "Hero",
    component: Hero,
};

export const Primary = () => (
<Hero title="Title" subtitle="some other text" />
);