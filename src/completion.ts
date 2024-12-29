import * as vscode from "vscode";

export default class Completions implements vscode.CompletionItemProvider {
  public provideCompletionItems(): vscode.ProviderResult<
    vscode.CompletionItem[]
  > {
    // move_to()
    const moveToCompletion = new vscode.CompletionItem(
      "move_to",
      vscode.CompletionItemKind.Method
    );
    moveToCompletion.insertText = new vscode.SnippetString("move_to($0)");

    // calc_route()
    const calcRouteCompletion = new vscode.CompletionItem(
      "calc_route",
      vscode.CompletionItemKind.Method
    );
    calcRouteCompletion.insertText = new vscode.SnippetString("calc_route($0)");

    // get_map_area()
    const getMapAreaCompletion = new vscode.CompletionItem(
      "get_map_area",
      vscode.CompletionItemKind.Method
    );
    getMapAreaCompletion.insertText = new vscode.SnippetString(
      "get_map_area($0)"
    );

    // set_dynamite()
    const setDynamiteCompletion = new vscode.CompletionItem(
      "set_dynamite",
      vscode.CompletionItemKind.Method
    );
    setDynamiteCompletion.insertText = new vscode.SnippetString(
      "set_dynamite($0)"
    );

    // map()
    const mapCompletion = new vscode.CompletionItem(
      "map",
      vscode.CompletionItemKind.Method
    );
    mapCompletion.insertText = new vscode.SnippetString("map($0)");

    // map_all
    const mapAllCompletion = new vscode.CompletionItem(
      "map_all",
      vscode.CompletionItemKind.Method
    );
    mapAllCompletion.insertText = new vscode.SnippetString("map_all");

    // locate_object
    const locateObjectCompletion = new vscode.CompletionItem(
      "locate_object",
      vscode.CompletionItemKind.Method
    );
    locateObjectCompletion.insertText = new vscode.SnippetString(
      "locate_object($0)"
    );

    // other_player_x
    const otherPlayerXCompletion = new vscode.CompletionItem(
      "other_player_x",
      vscode.CompletionItemKind.Value
    );
    otherPlayerXCompletion.insertText = new vscode.SnippetString(
      "other_player_x"
    );

    // other_player_y
    const otherPlayerYCompletion = new vscode.CompletionItem(
      "other_player_y",
      vscode.CompletionItemKind.Value
    );
    otherPlayerYCompletion.insertText = new vscode.SnippetString(
      "other_player_y"
    );

    // enemy_x
    const enemyXCompletion = new vscode.CompletionItem(
      "enemy_x",
      vscode.CompletionItemKind.Value
    );
    enemyXCompletion.insertText = new vscode.SnippetString("enemy_x");

    // enemy_x
    const enemyYCompletion = new vscode.CompletionItem(
      "enemy_y",
      vscode.CompletionItemKind.Value
    );
    enemyYCompletion.insertText = new vscode.SnippetString("enemy_y");

    // goal_x
    const goalXCompletion = new vscode.CompletionItem(
      "goal_x",
      vscode.CompletionItemKind.Value
    );
    goalXCompletion.insertText = new vscode.SnippetString("goal_x");

    // goal_y
    const goalYCompletion = new vscode.CompletionItem(
      "goal_y",
      vscode.CompletionItemKind.Value
    );
    goalYCompletion.insertText = new vscode.SnippetString("goal_y");

    // player_x
    const playerXCompletion = new vscode.CompletionItem(
      "player_x",
      vscode.CompletionItemKind.Value
    );
    playerXCompletion.insertText = new vscode.SnippetString("player_x");

    // player_y
    const playerYCompletion = new vscode.CompletionItem(
      "player_y",
      vscode.CompletionItemKind.Value
    );
    playerYCompletion.insertText = new vscode.SnippetString("player_y");

    // set_name
    const setNameCompletion = new vscode.CompletionItem(
      "set_name",
      vscode.CompletionItemKind.Method
    );
    setNameCompletion.insertText = new vscode.SnippetString("set_name($0)");

    // connect_game
    const connectGameCompletion = new vscode.CompletionItem(
      "connect_game",
      vscode.CompletionItemKind.Method
    );
    connectGameCompletion.insertText = new vscode.SnippetString("connect_game");

    // turn_over
    const turnOverCompletion = new vscode.CompletionItem(
      "turn_over",
      vscode.CompletionItemKind.Method
    );
    turnOverCompletion.insertText = new vscode.SnippetString("turn_over");

    return [
      moveToCompletion,
      calcRouteCompletion,
      getMapAreaCompletion,
      setDynamiteCompletion,
      mapCompletion,
      mapAllCompletion,
      locateObjectCompletion,
      otherPlayerXCompletion,
      otherPlayerYCompletion,
      enemyXCompletion,
      enemyYCompletion,
      goalXCompletion,
      goalYCompletion,
      playerXCompletion,
      playerYCompletion,
      setNameCompletion,
      turnOverCompletion,
      connectGameCompletion,
    ];
  }
}
