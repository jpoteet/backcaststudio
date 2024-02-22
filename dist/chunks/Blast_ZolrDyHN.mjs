const Blast = new Proxy({"src":"/_astro/Blast.j92ybDPF.png","width":4000,"height":4000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/Blast.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/Blast.png");
							return target[name];
						}
					});

export { Blast as default };
