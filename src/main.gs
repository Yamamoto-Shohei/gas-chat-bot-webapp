const API_KEY = '' // https://www.chaplus.jp/api ここでAPI KEYを取得

const doGet = () => HtmlService.createTemplateFromFile('index').evaluate()

const callBot = (value) => {
  const response = UrlFetchApp.fetch(`https://www.chaplus.jp/v1/chat?apikey=${API_KEY}`, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      utterance: value,
      username: '猫助',
      agentState:{
        agentName: 'ヨッシー',
        tone: 'tame',
        age: '2歳'
      },
    })
  })
  return JSON.parse(response.getContentText())
}
