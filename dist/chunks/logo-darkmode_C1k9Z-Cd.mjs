const logoDarkmode = new Proxy({"src":"/_astro/logo-darkmode.BiWDTEKV.png","width":330,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/logo-darkmode.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/logo-darkmode.png");
							return target[name];
						}
					});

export { logoDarkmode as default };
