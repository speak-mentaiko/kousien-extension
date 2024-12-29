import * as vscode from "vscode";
import Completions from "./completion";

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "ruby" },
    new Completions()
  );
  context.subscriptions.push(provider);
}

export function deactivate() {}
