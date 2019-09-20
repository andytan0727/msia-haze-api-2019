import axios from "axios";

module.exports = async (req, res) => {
  try {
    const result = await axios.get(
      "http://apims.doe.gov.my/data/public/CAQM/last24hours.json"
    );
    res.status(200).json(result.data);
  } catch (error) {
    console.log("error fetching api: ", error);
    return res.status(404).json(error);
  }
};
