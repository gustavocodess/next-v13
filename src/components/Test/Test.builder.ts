"use client";
import { Builder } from '@builder.io/react';
import Test from './Test';

export const TestBuilderConfig = {
  name: 'Test TS',
};
Builder.registerComponent(Test, TestBuilderConfig);
