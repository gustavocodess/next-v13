// @ts-ignore next-line
import { getContent } from '@builder.io/sdk-react/server';
import {builder} from '@builder.io/react'

// if you use VSCode and see a TS error for the line below, you can safely ignore it.
import BuilderPage from './BuilderPage';
import config from '../../../builderConfig.json';

async function getBuilderContent(urlPath: string) {
  // const page = await getContent({
  //   apiKey: config.apiKey,
  //   model: 'page',
  //   userAttributes: { urlPath },
  // });


  const finalUrl = encodeURI(`https://cdn.builder.io/api/v3/content/page?apiKey=${config.apiKey}&userAttributes.urlPath=${urlPath}&limit=1`)
  const content = await (await fetch(finalUrl)).json();
  const page = content?.results?.[0] || null

  console.log('test ', page)

  // const page =
  //   (await builder
  //     .get('page', {
  //       apiKey: config.apiKey,
  //       userAttributes: {
  //         urlPath: urlPath,
  //       },
  //     })
  //     .toPromise()) || null

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return {
    page: page,
  };
}

interface PageProps {
  params: {
    slug: string[];
  };
}

// Pages are Server Components by default
export default async function Page(props: PageProps) {
  console.log('props ', props?.params?.slug)
  const urlPath = '/' + (props.params?.slug?.join('/') || '');
  const content = await getBuilderContent(urlPath);
  console.log('contentn ', content, urlPath)

  if (!content.page) {
    return (
      <>
        <h1>404</h1>
        <p>Make sure you have your content published at builder.io.</p>
      </>
    );
  }
  return <BuilderPage builderContent={content.page} />;
}

export const revalidate = 4;