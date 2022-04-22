const printLine = (text: string, breakLine: boolean = true) => {
  process.stdout.write(text + (breakLine ? 'n' : ''))
}

const promptInput = async (text: string) => {
  printLine(`\n${text}\n>`, false)
  const input: string = await new Promise((resolve) => process.stdin.once('data', (data) =>
    resolve(data.toString())))
  return input.trim()
}

  ;(async () => {
    const hitAndBlow = new HitAndBlow()
  })()

class HitAndBlow {
  answerSource = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  answer: string[] = []
  tryCount = 0
}