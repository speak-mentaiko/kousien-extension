import * as vscode from "vscode";

export default class Completions implements vscode.CompletionItemProvider {
  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[]> {
    const lineText = document.lineAt(position).text;
    const beforeCursor = lineText.substring(0, position.character);
    const items: vscode.CompletionItem[] = [];

    // move_to()
    const moveToCompletion = new vscode.CompletionItem(
      "move_to",
      vscode.CompletionItemKind.Method
    );
    moveToCompletion.insertText = new vscode.SnippetString("move_to($0)");
    items.push(moveToCompletion);

    // calc_route()
    const calcRouteCompletion = new vscode.CompletionItem(
      "calc_route",
      vscode.CompletionItemKind.Method
    );
    calcRouteCompletion.insertText = new vscode.SnippetString("calc_route($0)");
    items.push(calcRouteCompletion);

    // src:
    const srcCompletion = new vscode.CompletionItem(
      "src:",
      vscode.CompletionItemKind.Property
    );
    srcCompletion.insertText = new vscode.SnippetString("src:($0)");
    if (beforeCursor.includes("calc_route(")) {
      items.push(srcCompletion);
    }

    // dst:
    const dstCompletion = new vscode.CompletionItem(
      "dst:",
      vscode.CompletionItemKind.Property
    );
    dstCompletion.insertText = new vscode.SnippetString("dst:($0)");
    if (beforeCursor.includes("calc_route(")) {
      items.push(dstCompletion);
    }

    // except_cells:
    const exceptCellsCompletion = new vscode.CompletionItem(
      "except_cells:",
      vscode.CompletionItemKind.Property
    );
    exceptCellsCompletion.insertText = new vscode.SnippetString(
      "except_cells:($0)"
    );
    if (beforeCursor.includes("calc_route(")) {
      items.push(exceptCellsCompletion);
    }

    // get_map_area()
    const getMapAreaCompletion = new vscode.CompletionItem(
      "get_map_area",
      vscode.CompletionItemKind.Method
    );
    getMapAreaCompletion.insertText = new vscode.SnippetString(
      "get_map_area($0)"
    );
    items.push(getMapAreaCompletion);

    // set_dynamite()
    const setDynamiteCompletion = new vscode.CompletionItem(
      "set_dynamite",
      vscode.CompletionItemKind.Method
    );
    setDynamiteCompletion.insertText = new vscode.SnippetString(
      "set_dynamite($0)"
    );
    items.push(setDynamiteCompletion);

    // map()
    const mapCompletion = new vscode.CompletionItem(
      "map",
      vscode.CompletionItemKind.Method
    );
    mapCompletion.insertText = new vscode.SnippetString("map($0)");
    items.push(mapCompletion);

    // map_all
    const mapAllCompletion = new vscode.CompletionItem(
      "map_all",
      vscode.CompletionItemKind.Method
    );
    mapAllCompletion.insertText = new vscode.SnippetString("map_all");
    items.push(mapAllCompletion);

    // locate_object
    const locateObjectCompletion = new vscode.CompletionItem(
      "locate_object",
      vscode.CompletionItemKind.Method
    );
    locateObjectCompletion.insertText = new vscode.SnippetString(
      "locate_object($0)"
    );
    items.push(locateObjectCompletion);

    // cent:
    const centCompletion = new vscode.CompletionItem(
      "cent:",
      vscode.CompletionItemKind.Property
    );
    centCompletion.insertText = new vscode.SnippetString("cent:($0)");
    if (beforeCursor.includes("locate_object(")) {
      items.push(centCompletion);
    }

    // sq_size:
    const sqSizeCompletion = new vscode.CompletionItem(
      "sq_size:",
      vscode.CompletionItemKind.Property
    );
    sqSizeCompletion.insertText = new vscode.SnippetString("sq_size:($0)");
    if (beforeCursor.includes("locate_object(")) {
      items.push(sqSizeCompletion);
    }

    // objects:
    const objectsCompletion = new vscode.CompletionItem(
      "objects:",
      vscode.CompletionItemKind.Property
    );
    objectsCompletion.insertText = new vscode.SnippetString("objects:($0)");
    if (beforeCursor.includes("locate_object(")) {
      items.push(objectsCompletion);
    }

    // other_player_x
    const otherPlayerXCompletion = new vscode.CompletionItem(
      "other_player_x",
      vscode.CompletionItemKind.Value
    );
    otherPlayerXCompletion.insertText = new vscode.SnippetString(
      "other_player_x"
    );
    items.push(otherPlayerXCompletion);

    // other_player_y
    const otherPlayerYCompletion = new vscode.CompletionItem(
      "other_player_y",
      vscode.CompletionItemKind.Value
    );
    otherPlayerYCompletion.insertText = new vscode.SnippetString(
      "other_player_y"
    );
    items.push(otherPlayerYCompletion);

    // enemy_x
    const enemyXCompletion = new vscode.CompletionItem(
      "enemy_x",
      vscode.CompletionItemKind.Value
    );
    enemyXCompletion.insertText = new vscode.SnippetString("enemy_x");
    items.push(enemyXCompletion);

    // enemy_x
    const enemyYCompletion = new vscode.CompletionItem(
      "enemy_y",
      vscode.CompletionItemKind.Value
    );
    enemyYCompletion.insertText = new vscode.SnippetString("enemy_y");
    items.push(enemyYCompletion);

    // goal_x
    const goalXCompletion = new vscode.CompletionItem(
      "goal_x",
      vscode.CompletionItemKind.Value
    );
    goalXCompletion.insertText = new vscode.SnippetString("goal_x");
    items.push(goalXCompletion);

    // goal_y
    const goalYCompletion = new vscode.CompletionItem(
      "goal_y",
      vscode.CompletionItemKind.Value
    );
    goalYCompletion.insertText = new vscode.SnippetString("goal_y");
    items.push(goalYCompletion);

    // player_x
    const playerXCompletion = new vscode.CompletionItem(
      "player_x",
      vscode.CompletionItemKind.Value
    );
    playerXCompletion.insertText = new vscode.SnippetString("player_x");
    items.push(playerXCompletion);

    // player_y
    const playerYCompletion = new vscode.CompletionItem(
      "player_y",
      vscode.CompletionItemKind.Value
    );
    playerYCompletion.insertText = new vscode.SnippetString("player_y");
    items.push(playerYCompletion);

    // set_name
    const setNameCompletion = new vscode.CompletionItem(
      "set_name",
      vscode.CompletionItemKind.Method
    );
    setNameCompletion.insertText = new vscode.SnippetString("set_name($0)");
    items.push(setNameCompletion);

    // connect_game
    const connectGameCompletion = new vscode.CompletionItem(
      "connect_game",
      vscode.CompletionItemKind.Method
    );
    connectGameCompletion.insertText = new vscode.SnippetString("connect_game");
    items.push(connectGameCompletion);

    // turn_over
    const turnOverCompletion = new vscode.CompletionItem(
      "turn_over",
      vscode.CompletionItemKind.Method
    );
    turnOverCompletion.insertText = new vscode.SnippetString("turn_over");
    items.push(turnOverCompletion);

    return items;
  }
}
