const spaceship = (type) => {
  return {
    warp: () => console.log(type + " is entering warp")
  }
}

const maulus = spaceship("maulus")
maulus.warp()
