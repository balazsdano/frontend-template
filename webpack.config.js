/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */

const express = require("express");
const path = require("path");

module.exports = {
    mode: getMode(),
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        library: getOutputLibrary(),
        path: getOutputPath()
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "sandbox"),
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true,
        hot: true,
        port: 3000,
        before: function (app) {
            app.use(express.json());

            // Setup local mock endpoints
            app.get("/path1/", function (req, res) {
                setTimeout(function () {
                    res.json({ someField1: "someValue1" });
                }, 1000);
            });

            app.post("/path2/", function (req, res) {
                const { someField2 } = req.body;
                setTimeout(function () {
                    res.json({ someField3: "someValue3" });
                }, 2000);
            });

            app.patch("/path3/", function (req, res) {
                const { someField4 } = req.params;
                const { someField5 } = req.body;
                setTimeout(function () {
                    res.json({ someField6: "someValue6" });
                }, 3000);
            });
        }
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: getExternals()
};

function getMode() {
    return "development";
}

function getOutputLibrary() {
    return "Template";
}

function getOutputPath() {
    return path.resolve(__dirname, "sandbox");
}

function getExternals() {
    // E.g. return {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // };
    return {};
}
