'use client';
// import { BuilderComponent, builder } from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';
// @ts-ignore next-line TODO: fix types
import { RenderContent } from '@builder.io/sdk-react';
import config from '../../../builderConfig.json';
import '../../components/Footer/Footer.builder';
import '../../components/Test/Test.builder';

// builder.init(builderConfig.apiKey);

interface BuilderPageProps {
  builderContent: BuilderContent;
}

export default function BuilderPage({ builderContent }: BuilderPageProps) {
  return (
    <RenderContent
      content={builderContent}
      model="page"
      apiKey={config.apiKey}
    />
  )
  //  <BuilderComponent model="page" content={builderContent} />;
}
