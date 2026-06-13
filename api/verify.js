export default function handler(req, res) {
    // URL parameters se API nikalna
    const { api } = req.query;

    // Target link jo sirf backend ko pata hai
    const targetIDLink = "https://muhammadtaqi512q-oss.github.io/puzzle/web-builder";

    // 1. Total length exactly 10 characters (mt + 8 letters)
    if (!api || api.length !== 10) {
        return res.status(403).json({ status: 'failed' });
    }

    // 2. Must start with 'mt'
    if (!api.startsWith('mt')) {
        return res.status(403).json({ status: 'failed' });
    }

    // 3. Allowed chunks checklist
    const pattern = /^(mt|tm|zf|mh|az|5|12|14|72|786)+$/;
    if (!pattern.test(api)) {
        return res.status(403).json({ status: 'failed' });
    }

    // Agar sab sahi hai tou target URL bhej do
    return res.status(200).json({ status: 'success', url: targetIDLink });
}
