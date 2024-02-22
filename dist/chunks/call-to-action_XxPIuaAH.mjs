const callToAction = new Proxy({"src":"/_astro/call-to-action.DNZkTK0I.png","width":392,"height":390,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/call-to-action.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/jessepoteet/Dev/01_Business_Sites/Backcast Studio/backcaststudio/public/images/call-to-action.png");
							return target[name];
						}
					});

export { callToAction as default };
