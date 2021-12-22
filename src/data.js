import dublaMatrimoniala_3_1 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_1.JPG";
import dublaMatrimoniala_3_2 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_2.JPG";
import dublaMatrimoniala_3_3 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_3.JPG";
import dublaMatrimoniala_3_4 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_4.JPG";
import dublaMatrimoniala_3_5 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_5.JPG";
import dublaMatrimoniala_3_6 from "./images/images-ursu/camere/dubla3/dubla-matrimoniala-3_6.JPG";

import dublaMatrimoniala_2_1 from "./images/images-ursu/camere/dubla2/dubla-matrimoniala-2_1.JPG";
import dublaMatrimoniala_2_2 from "./images/images-ursu/camere/dubla2/dubla-matrimoniala-2_2.JPG";
import dublaMatrimoniala_2_3 from "./images/images-ursu/camere/dubla2/dubla-matrimoniala-2_3.JPG";
import dublaMatrimoniala_2_4 from "./images/images-ursu/camere/dubla2/dubla-matrimoniala-2_4.JPG";
import dublaMatrimoniala_2_5 from "./images/images-ursu/camere/dubla2/dubla-matrimoniala-2_5.JPG";

import dublaTwin_3_1 from "./images/images-ursu/camere/dublaTwin/dubla-twin-3_1.JPG";
import dublaTwin_3_2 from "./images/images-ursu/camere/dublaTwin/dubla-twin-3_2.JPG";
import dublaTwin_3_3 from "./images/images-ursu/camere/dublaTwin/dubla-twin-3_3.JPG";
import dublaTwin_3_4 from "./images/images-ursu/camere/dublaTwin/dubla-twin-3_4.JPG";
import dublaTwin_3_5 from "./images/images-ursu/camere/dublaTwin/dubla-twin-3_5.JPG";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Camera Dubla Matrimoniala 2 Locuri",
      slug: "camera-dubla-matrimoniala",
      type: "dubla-matrimoniala",
      price: 300,
      size: 15,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Camera dubla matrimoniala consta intr-un pat matrimonial King Size, baie, televizor.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: dublaMatrimoniala_2_1,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_2_2,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_2_5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Camera Dubla Matrimoniala 3 Locuri",
      slug: "camera-dubla-matrimoniala-3",
      type: "dubla-matrimoniala-twin",
      price: 380,
      size: 15,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Camera dubla matrimoniala consta intr-un pat matrimonial King size si o canapea extensibila, televizor, baie",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_1,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_2,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_3,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_4,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_5,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaMatrimoniala_3_6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Camera Dubla Twin 3 locuri",
      slug: "camera-dubla-twin",
      type: "dubla-twin",
      price: 380,
      size: 15,
      capacity: 3,
      breakfast: true,
      featured: true,
      description:
        "Camera dubla twin consta in 2 paturi simple si un fotoliu extensibil",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: dublaTwin_3_1,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaTwin_3_2,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaTwin_3_3,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaTwin_3_4,
            },
          },
        },
        {
          fields: {
            file: {
              url: dublaTwin_3_5,
            },
          },
        },
      ],
    },
  },
];
