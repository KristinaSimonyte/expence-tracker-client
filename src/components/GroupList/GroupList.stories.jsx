import React from 'react';
import GroupList from "./GroupList";

export default {
    title: "GroupList",
    component: GroupList,
};

const data = ["Namai", "Automobilis", "Vaikai", "Maistas"];

export const Default = () => <GroupList items={data} />;