const getFile = (
  data: { route?: string; url?: string; extension: string } = { extension: 'svg' }
) => {
  // if (data.extension === undefined) {
  //   data.extension = 'svg'
  // }

  return new URL(`/src/assets/${data.route}/${data.url}.${data.extension}`, import.meta.url).href
}

export default getFile
