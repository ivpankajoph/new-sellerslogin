/** Unsplash — free e-commerce imagery (hotlink-friendly CDN) */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroStore: u("photo-1556742049-0cfed4f6a45d", 1200),
  heroProducts: u("photo-1505740420928-5e560c06d30e", 900),
  heroFashion: u("photo-1441986300917-64674bd600d8", 900),
  heroPayment: u("photo-1563013544-824ae1b704d3", 900),
  heroWarehouse: u("photo-1586528116311-ad8dd3c8310d", 900),
  featureAi: u("photo-1677442136019-21780ecad995", 600),
  featureEditor: u("photo-1460925895917-afdab827c52f", 600),
  featurePayment: u("photo-1563013544-824ae1b704d3", 600),
  featureInventory: u("photo-1586528116311-ad8dd3c8310d", 600),
  featureMarketing: u("photo-1563986768609-322da13575f3", 600),
  featureAnalytics: u("photo-1551288049-bebda4e38f71", 600),
  featureSeo: u("photo-1551288049-bebda4e38f71", 600),
  featureMobile: u("photo-1512941937669-90a1b58e7e9c", 600),
  blogStrategy: u("photo-1523275335684-37898b6baf30", 700),
  blogAi: u("photo-1677442136019-21780ecad995", 700),
  blogMarketing: u("photo-1563986768609-322da13575f3", 700),
  caseFashion: u("photo-1490481651871-ab68de25d43d", 700),
  caseTech: u("photo-1505740420928-5e560c06d30e", 700),
  caseFood: u("photo-1542838132-92c53300491e", 700),
  productShoes: u("photo-1560769629-975ec94e6a86", 400),
  productWatch: u("photo-1523275335684-37898b6baf30", 400),
  productBag: u("photo-1548036328-c9fa89d128fa", 400),
  showcaseFashion: u("photo-1490481651871-ab68de25d43d", 1000),
} as const;
