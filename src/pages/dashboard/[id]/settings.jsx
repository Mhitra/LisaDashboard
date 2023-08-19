import { DashboardLayout } from "@/components/layouts/dashboard";
import { fetchChannels, fetchRoles } from "@/utils/api";
import { useState } from "react";
import { BsSave } from "react-icons/bs";

const Settingspage = ({ channels, roles }) => {
  const [settings, setSettings] = useState({
    selectedCategory: "",
    selectedLogChannel: "",
    selectedSuggestionChannel: "",
    selectedTicketRole: "",
    TicketMessage: "",
    TicketMessageDescription: "",
    selectedForumChannel: "",
    selectedTicketLogChannel: "",
    selectedMessageLogChannel: "",
    TicketPanelChannel: "",
    isTicketSystemVisible: true,
    isSystemChannelsVisible: false,
    selectedInviteChannel: "",

  });

  const {
    selectedCategory,
    selectedTicketLogChannel,
    selectedSuggestionChannel,
    selectedTicketRole,
    TicketMessage,
    TicketMessageDescription,
    selectedForumChannel,
    selectedLogChannel,
    selectedMessageLogChannel,
    TicketPanelChannel,
    isTicketSystemVisible,
    isSystemChannelsVisible,
    selectedInviteChannel,
  } = settings;

  const channelGroups = channels.reduce((groups, channel) => {
    const type = channel.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(channel);
    return groups;
  }, {});

  const categoryChannels = channelGroups[4] || [];
  const textChannels = channelGroups[0] || [];
  const forumChannels = channelGroups[15] || [];

  const notbotroles = roles.filter(
    (role) => !role.tags && role.name !== "@everyone"
  );

  const createChangeHandler = (key) => {
    return function (event) {
      const value = event.target.value;
      setSettings((prevSettings) => ({
        ...prevSettings,
        [key]: value,
      }));
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    console.log("Settings saved!");
  };

  const renderChannelOptions = (channels) =>
    channels.map((channel) => (
      <option key={channel.id} value={channel.id}>
        {channel.name}
      </option>
    ));

  return (
    <div className="page p-4 flex justify-center items-center">
      <div className="flex flex-wrap -mx-4 w-full sm:w-2/3">
        <div className="w-full sm:w-1/2 p-4">
          <div
            className={`bg-blue-800 p-4 rounded-lg ${
              isTicketSystemVisible ? "block" : "hidden"
            }`}
          >
            <h1 className="mb-4 text-2xl font-bold text-white">
              Ticket System Settings
            </h1>

            <div className="mb-2">
              <label
                htmlFor="category-select"
                className="block text-white mb-1"
              >
                Select Category Channel for Tickets:
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={createChangeHandler("selectedCategory")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Category Channel</option>
                {renderChannelOptions(categoryChannels)}
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="ticket-log-channel-select"
                className="block text-white mb-1"
              >
                Select Log Channel for Ticket Logs:
              </label>
              <select
                id="ticket-log-channel-select"
                value={selectedTicketLogChannel}
                onChange={createChangeHandler("selectedTicketLogChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Log Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="ticket-role-select"
                className="block text-white mb-1"
              >
                Select Role for Ticket Access:
              </label>
              <select
                id="ticket-role-select"
                value={selectedTicketRole}
                onChange={handleInputChange}
                name="selectedTicketRole"
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Role</option>
                {notbotroles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="suggestion-message-title-input"
                className="block text-white mb-1"
              >
                Ticket Message Title:
              </label>
              <textarea
                id="ticket-message-title-input"
                value={TicketMessage}
                onChange={createChangeHandler("TicketMessage")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
                rows="1"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="suggestion-message-description-input"
                className="block text-white mb-1"
              >
                Enter Ticket Message Description:
              </label>
              <textarea
                id="ticket-message-description-input"
                value={TicketMessageDescription}
                onChange={createChangeHandler("TicketMessageDescription")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
                rows="4"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="ticket-log-channel-select"
                className="block text-white mb-1"
              >
                Select Panel Channel for Ticket System:
              </label>
              <select
                id="ticket-panel-channel-select"
                value={TicketPanelChannel}
                onChange={createChangeHandler("TicketPanelChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Panel Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>
            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  isTicketSystemVisible: false,
                  isSystemChannelsVisible: true,
                })
              }
              className="flex items-center justify-center w-full sm:w-24 h-10 mt-2 text-sm 
        font-medium text-white bg-green-600 rounded-md hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to System Channels
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <div
            className={`bg-blue-800 p-4 rounded-lg ${
              isSystemChannelsVisible ? "block" : "hidden"
            }`}
          >
            <h1 className="mb-4 text-2xl font-bold text-white">
              System Channels Settings
            </h1>

            <div className="mb-2">
              <label
                htmlFor="suggestion-channel-select"
                className="block text-white mb-1"
              >
                Select Suggestion Channel for Suggestion System:
              </label>
              <select
                id="suggestion-channel-select"
                value={selectedSuggestionChannel}
                onChange={createChangeHandler("selectedSuggestionChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Suggestion Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="forum-channel-select"
                className="block text-white mb-1"
              >
                Select Forum Channel:
              </label>
              <select
                id="forum-channel-select"
                value={selectedForumChannel}
                onChange={createChangeHandler("selectedForumChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Forum Channel</option>
                {renderChannelOptions(forumChannels)}
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="log-channel-select"
                className="block text-white mb-1"
              >
                Select Log Channel:
              </label>
              <select
                id="log-channel-select"
                value={selectedLogChannel}
                onChange={createChangeHandler("selectedLogChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Log Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="log-channel-select"
                className="block text-white mb-1"
              >
                Select Messages Log Channel:
              </label>
              <select
                id="log-channel-select"
                value={selectedMessageLogChannel}
                onChange={createChangeHandler("selectedMessageLogChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select a Message Log Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="invite-channel-select"
                className="block text-white mb-1"
              >
                Select a Invite Log Channel:
              </label>
              <select
                id="invite-channel-select"
                value={selectedInviteChannel}
                onChange={createChangeHandler("selectedInviteChannel")}
                className="block w-full p-1 border rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-black text-sm"
              >
                <option value="">Select Invite Log Channel</option>
                {renderChannelOptions(textChannels)}
              </select>
            </div>
            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  isTicketSystemVisible: true,
                  isSystemChannelsVisible: false,
                })
              }
              className="flex items-center justify-center w-full sm:w-24 h-10 mt-2 text-sm 
        font-medium text-white bg-green-600 rounded-md hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Ticket System
            </button>
          </div>
        </div>
      </div>

      <div className="clear-both"></div>

      <button
        onClick={handleSaveButtonClick}
        className="flex items-center justify-center w-full sm:w-20 h-8 mt-2 text-sm 
        font-medium text-white bg-green-600 rounded-md hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BsSave className="mr-2" />
        Save
      </button>
    </div>
  );
};

Settingspage.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx) {
  const channels = await fetchChannels(ctx);
  const roles = await fetchRoles(ctx);
  return {
    props: {
      channels: channels,
      roles: roles,
    },
  };
}

export default Settingspage;
