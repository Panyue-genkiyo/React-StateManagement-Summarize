//测试reacted-track的useUpdate使用
import { useState } from "react";
import { createContainer } from "react-tracked";

const useValue = () => useState({});

export const {Provider: PersonProvider, useTrackedState, useUpdate: useSetState}  = createContainer(useValue);

