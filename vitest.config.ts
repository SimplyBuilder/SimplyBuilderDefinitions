import { defineConfig } from "vitest/config";
import {TypecheckConfig} from "vitest/node";

const typecheckOptions: TypecheckConfig = {
    checker: "tsc",
    enabled: true,
    exclude: ['node_modules'],
    include: ['./tests/**'],
    only: true
};

export default defineConfig({
    test: {
        typecheck: typecheckOptions,
        watch: false
    },
});
