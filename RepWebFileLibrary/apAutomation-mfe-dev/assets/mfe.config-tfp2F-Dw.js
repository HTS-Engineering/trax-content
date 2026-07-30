const MFE_NAME = "apAutomation-mfe";
const LOADER_PREFIX = "apAutomation";
const CONTAINER_ID = "apAutomation-mfe";
const JWT_STORAGE_KEY = "jwtApAutomationOBO";
const NAME_RE = /^[a-z][A-Za-z0-9]*(-[A-Za-z0-9]+)*$/;
const PREFIX_RE = /^[a-z][A-Za-z0-9]*$/;
if (!NAME_RE.test(MFE_NAME)) {
  throw new Error(
    `mfe.config: MFE_NAME must be lowercase-initial alphanumeric with optional hyphens, got ${JSON.stringify(MFE_NAME)}`
  );
}
if (!PREFIX_RE.test(LOADER_PREFIX)) {
  throw new Error(
    `mfe.config: LOADER_PREFIX must be lowercase-initial alphanumeric, got ${JSON.stringify(LOADER_PREFIX)}`
  );
}
const SCOPE_CLASS = `${MFE_NAME}-scope`;
const SCOPE_PREFIX = MFE_NAME;
const SERVICE_NAME = MFE_NAME;
const STORAGE_PREFIX = MFE_NAME;
const ENVIRONMENTS = {
  development: { suffix: "dev", loaderWord: "Dev" },
  sit: { suffix: "sit", loaderWord: "Sit" },
  stage: { suffix: "stage", loaderWord: "Stage" },
  production: { suffix: "", loaderWord: "" },
  localdev: { suffix: "localdev", loaderWord: "Localdev", outDir: "dist", moveLoaderUp: false }
};
const MFE_ENVIRONMENTS = Object.fromEntries(
  Object.entries(ENVIRONMENTS).map(([env, spec]) => {
    const suffixed = spec.suffix ? `${MFE_NAME}-${spec.suffix}` : MFE_NAME;
    return [
      env,
      {
        outDir: spec.outDir ?? suffixed,
        mfeName: suffixed,
        loaderFileName: `${LOADER_PREFIX}Mfe${spec.loaderWord}Loader.js`,
        moveLoaderUp: spec.moveLoaderUp ?? true,
        containerId: CONTAINER_ID,
        scopeClass: SCOPE_CLASS
      }
    ];
  })
);
Object.values(MFE_ENVIRONMENTS).map((e) => e.outDir);
export {
  CONTAINER_ID as C,
  JWT_STORAGE_KEY as J,
  STORAGE_PREFIX as S,
  SCOPE_CLASS as a,
  SERVICE_NAME as b,
  SCOPE_PREFIX as c
};
