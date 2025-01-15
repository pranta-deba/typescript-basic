{
  // Generic with Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDev: Developer<EmilabWatch> = {
    name: "pritom",
    computer: {
      brand: "Acer",
      model: "AMD",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "LED",
    },
  };


  interface AppleWatch {
    brand: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahaBike {
    model: string;
  }
  const richDev: Developer<AppleWatch, YamahaBike> = {
    name: "pritom",
    computer: {
      brand: "Acer",
      model: "AMD",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "apple",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
    },
  };
}
