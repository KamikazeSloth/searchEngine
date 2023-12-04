export const getKites = async () => {
    try {
      const response = await fetch("http://localhost:3000/kites");
      console.log("response from db", response)
      const kites = await response.json()
      return kites
  } catch (error) {
      console.error(`error: ${error.message}`);
  }
}