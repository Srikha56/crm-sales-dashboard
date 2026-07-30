function RecentActivities() {

  const activities = [
    {
      id: 1,
      title: "New customer added",
      user: "John Smith",
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Deal closed successfully",
      user: "Emma Watson",
      time: "15 mins ago",
    },
    {
      id: 3,
      title: "Lead status updated",
      user: "David Lee",
      time: "30 mins ago",
    },
    {
      id: 4,
      title: "Invoice generated",
      user: "Sophia Brown",
      time: "1 hour ago",
    },
  ];


  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

      <h2 className="mb-4 text-xl font-semibold">
        Recent Activities
      </h2>


      <div className="space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between border-b pb-3"
          >

            <div>
              <p className="font-medium">
                {activity.title}
              </p>

              <p className="text-sm text-gray-500">
                {activity.user}
              </p>
            </div>


            <span className="text-sm text-gray-400">
              {activity.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivities