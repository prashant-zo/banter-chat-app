export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedInUser }}).select("-password");

        res.status(200).json(filteredUser);
    } catch (error) {
        console.log("Error in getUserForSidebar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}