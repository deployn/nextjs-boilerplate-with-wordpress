# [2.0.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.16.0...v2.0.0) (2023-04-07)


### Continuous Integration

* drop node 14 support and update deps and main test to node 18 ([a8aa340](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/a8aa3406f6fc86b64a518608a27acbc18b57bb0f))


### BREAKING CHANGES

* no test for node 14

# [1.16.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.15.4...v1.16.0) (2023-03-31)


### Features

* add some wp content styles ([778fc57](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/778fc57b1927e606eae5477071c6c19c2bd720e2))

## [1.15.4](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.15.3...v1.15.4) (2023-03-09)


### Bug Fixes

* remove protocol from plausible domain ([d6b4f51](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/d6b4f51308f2d1b0b0596c2bca7d59ff7e070372)), closes [#24](https://github.com/deployn/nextjs-boilerplate-with-wordpress/issues/24)

## [1.15.3](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.15.2...v1.15.3) (2023-03-07)


### Bug Fixes

* prevent hydration error on index page ([ae5f893](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/ae5f893d72960dfdd0cecf145e62bec51a970b13))

## [1.15.2](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.15.1...v1.15.2) (2023-03-03)


### Bug Fixes

* update for build-in next/font ([c1f863b](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/c1f863b3dd7843f43ee1ef2f6fb5b3cf67c168b7))

## [1.15.1](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.15.0...v1.15.1) (2023-02-24)


### Bug Fixes

* **tailwind config:** move plugins outside of theme ([e75a1b6](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/e75a1b68901142e6bd3c4d2a81eabf5c72bfe295))

# [1.15.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.14.0...v1.15.0) (2023-02-22)


### Features

* add some wordpress styles ([949d17a](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/949d17a6c96ed077bb77b22e670ec0d9ac5551d4))
* sort by date ([64e8efb](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/64e8efb4af2a051def373f9ec693e74f1cf12cc1))
* update wordpress post fetching ([97a47be](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/97a47be7670c3df5f799367b39e2fae8a13d06ef))


### Reverts

* **Link:** don't handle wpdomain links as internal ([3eec669](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/3eec6693563ebc0d07f996e3a04a47ca9d854d32))

# [1.14.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.13.0...v1.14.0) (2023-02-20)


### Features

* add contact form ([bf3f9c6](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/bf3f9c6b049bce20bb288162ea5f315a609afbaf))

# [1.13.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.12.0...v1.13.0) (2023-02-19)


### Features

* load youtube video only after visitor gave consent ([0b95fa1](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/0b95fa153c99d5ef03cfbefab78a543ba478d6ac))

# [1.12.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.11.0...v1.12.0) (2023-02-17)


### Features

* add support for selfhosted plausible or umami ([6b311e0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/6b311e0e186db800dcfe61493a46ba3d18e77c0f))


### Reverts

* **deps:** revert fsevents ([ec44eec](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/ec44eec42be36c2b5276bd25586e048f7f998241))

# [1.11.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.10.0...v1.11.0) (2023-02-04)


### Bug Fixes

* **Link:** update link component to use internel link when starts with  wpDomain ([b1282a1](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/b1282a1c4de88820952b5a4c9bcfec592cd74129))


### Features

* **_app:** wrap into apolloclient ([6acc681](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/6acc681f6bc7bc57634a2c8f77308fb301d5c10c))
* **apollo:** add page to test the postlist ([5d8a2d4](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/5d8a2d4b1548acefb9f69150be43e6869620860a))
* **Apolloclient:** add apolloclient ([7371f81](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/7371f8135bce14346b36cf42b49490ca846285a9))
* **Link:** treat link to wp domain as internal ([b16aff6](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/b16aff618d71e77a2ca8cb7d580ea077fcc4d472))
* **next.config.js:** image optimisation for wordpress images ([d20e664](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/d20e664b0a4acd1759ad76b77e9fbb54fc5206f1))
* **PostBody:** transform <a> into <Link> ([3bf3f00](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/3bf3f00aa3ce2a30156f74968c257bf43a4d25ed))
* **PostBody:** use htmlreactparser instead of dangerouslysetinnerhtml ([1deb264](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/1deb264dd04e354a45f2ffb171def8f40e65443c))
* **PostList:** add a postlist component to fetch 10 posts with apollo ([dd5a1e3](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/dd5a1e33240de8e318fd951f073c0005f4c6abb9))
* **PostList:** add html react parser ([ccda68a](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/ccda68a48e98a0e91f8e4bc42a4cbefc06e3ded2))
* **wordpress.css:** add flex to column blocks ([26dea44](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/26dea44b693a55b9565285856e689cd9e707315a))

# [1.10.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.9.0...v1.10.0) (2023-02-01)


### Features

* **Link:** link components uses internal link when it's the domain in the appconfig ([229c7b0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/229c7b0d0332c8da0e1525abeeb1976bd1daca7d))

# [1.9.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.8.0...v1.9.0) (2023-01-31)


### Features

* add impulse.dev for live editing of tailwind classes ([e49d3c9](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/e49d3c90dcfbac6ef3bc95f111df79f3ec1cc3b5))

# [1.8.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.7.0...v1.8.0) (2023-01-28)


### Features

* add local google fonts ([4cc2cf2](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/4cc2cf2fa23f0c3e0c9e22f8225b670100cd46c5))
* **index.tsx:** add some fonts for testing purpose ([13c109f](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/13c109f8b706a1b0e7f1f0cb6f8c485d84c15ce2))

# [1.7.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.6.0...v1.7.0) (2023-01-24)


### Bug Fixes

* **Layout.tsx:** wrap content into a grid to stick footer to have the footer at the bottom ([9ca4584](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/9ca4584ac1305885754b35eb3e1f8f3729c22d5a))


### Features

* **Footer.tsx:** add footer component ([feda0fa](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/feda0fa9e79abc4342dc470479b3607317cae29d))
* **Footer.tsx:** make footer a little bit brighter for more contrast with the cookiebanner ([1ea425b](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/1ea425bb77299cbc43c74bcd8aa67fef624c9572))

# [1.6.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.5.0...v1.6.0) (2023-01-24)


### Features

* **index.tsx:** add some styles ([988b4a0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/988b4a0ded130866940a7437dc5e845c36e70a55))

# [1.5.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.4.0...v1.5.0) (2023-01-24)


### Features

* **CookieBanner.tsx:** add cookiebanner component ([b8e9577](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/b8e95774a9a4e88ef80ddbe8b27b4ad5ba5b66c5))
* **Index.tsx:** show on index page if cookies were accepted ([e50ed82](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/e50ed829bfd667a40b89cd77cc3d1068e2f50372))
* **Layout.tsx:** add cookiebanner to layout ([bf1100b](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/bf1100b46a9e5b3ca820a90bd660427ea243aa78))

# [1.4.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.3.0...v1.4.0) (2023-01-22)


### Features

* **Header.tsx:** show active route ([2dabfe4](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/2dabfe4c2e5d932effb8b27c541b3aecb4c955b8))

# [1.3.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.2.0...v1.3.0) (2023-01-22)


### Features

* **pages:** bigger heading ([409ff5b](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/409ff5bf45993a0511e8d879993bfcda6abf6903))

# [1.2.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.1.0...v1.2.0) (2023-01-22)


### Features

* create about and contact page for navigation ([932fee7](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/932fee7cabb9487e39c1418ada2475fd6d33fc59))
* **Header.tsx:** create header component ([ccd17d7](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/ccd17d72a71ed7173a5915ceb9226402617bc701))
* **Layout.tsx:** add header to layout ([08b30e0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/08b30e0a94fc9117998ced28fabe033245c81db4))
* **package.json:** install headlessui and heroicons ([368c247](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/368c24742a9ae95738b00f9bab6e482315565d24))
* **posts/[slug].tsx:** use layout instead of postlayout ([c3cc0b9](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/c3cc0b9baf91bbec7ea0bc462d5b1425480f2984))

# [1.1.0](https://github.com/deployn/nextjs-boilerplate-with-wordpress/compare/v1.0.0...v1.1.0) (2023-01-17)


### Bug Fixes

* add seoprops type ([4a7bbf6](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/4a7bbf6816775daef00cb9117ed8c68a6fa31090))
* **index.tsx:** remove dublicate link import to use custom link component ([0b7d55a](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/0b7d55ab1a237b8c7c8e45ce313d279f93a34ff2))
* **PostBody.tsx:** add typecheck ([a52bb7c](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/a52bb7c40bfd5830d7075a16b1bd640bf0cd78fa))
* **posts/[slug]:** moved layout component, add postlayout component ([9dd59c9](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/9dd59c9efcb3adc1a8f974ea1031436e6ec0516a))
* **posts/[slug]:** use custom link component ([1cd3121](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/1cd312106e4136f85f1fc1d406ffb74a42ff4d60))


### Features

* add routing to posts and post page ([591047a](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/591047ab94754a45e26ca98cecf2644443748793))
* **PostBody:** create postbody component with some styles ([98d1086](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/98d10864e785490d25d429e699d922733fc30eef))

# 1.0.0 (2023-01-16)


### Features

* **Link:** add custom link component ([b35e597](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/b35e5979c9cdcf56554815d286ab3a30ea9fbdc9))
* **tailwind.config.js:** extend tailwind config with primary color ([69f06f8](https://github.com/deployn/nextjs-boilerplate-with-wordpress/commit/69f06f8858d766a909e25492b725c80b5dbf1262))
