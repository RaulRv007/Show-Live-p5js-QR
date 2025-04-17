import * as vscode from 'vscode';
import * as qrcode from 'qrcode';
import * as ip from 'ip';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.showLivePreviewQR', async () => {
    const localIp = ip.address();
    const url = `http://${localIp}:5500/index.html`;

    vscode.window.showInformationMessage(`Generating QR for: ${url}`);

    const qrString = await qrcode.toString(url, { type: 'terminal' });
    const qrImg = await qrcode.toDataURL(url);

    // Display in a webview panel
    const panel = vscode.window.createWebviewPanel(
      'qrPreview',
      'Live Preview QR Code',
      vscode.ViewColumn.One,
      {}
    );

    panel.webview.html = `
      <html>
        <body style="display:flex;flex-direction:column;align-items:center;font-family:sans-serif;">
          <h2>Scan to View on Your Phone</h2>
          <img src="${qrImg}" />
          <p>${url}</p>
        </body>
      </html>
    `;
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
