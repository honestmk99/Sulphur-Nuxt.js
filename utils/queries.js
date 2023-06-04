import { groq } from "@nuxtjs/sanity";

export const homeQuery = groq`*[_type == 'home'][0] {...}`;

export const physQuery = groq`
*[_type == 'physicians'] | order(order asc)

`;

export const clinQuery = groq`
*[_type == 'clinic']
`

export function pageQuery(param) {
  return `*[_type == 'page' && slug.current == '${param}'][0] {
    ...,
    'physicians' : *[_type == 'physicians' && references(^._id)] {
      ...
    }
  }`;
}

export const ccQuery = groq`

*[_type == 'cc'][0]

`

export const themeQuery = groq`
{"nav" : *[_type == 'menu'][0] {
 
 heroLogo,
 menu[] {
 
 ...,
 linkInternal -> {
 "slug": slug.current
}
},
 logoType
 
},

"footer" : *[_type == 'menu'][0] {
  address,
  address2,
  phone,
  addLink,
  help,
  socials,
  footerLogo
}
}


`

export const procMenuQuery = groq`

*[_type == 'page' && procedure == true] {
  'external' : false,
  'display' : title,
  'linkInternal' : {'slug' : slug.current}
  
}
`

export const pageMenuQuery = groq`

*[_type == 'page' && procedure != true] {
  'external' : false,
  'display' : title,
  'linkInternal' : {'slug' : slug.current}
  
}
`

export const logoQuery = groq`

*[_type == 'menu'][0] {
  heroLogo
}




`
