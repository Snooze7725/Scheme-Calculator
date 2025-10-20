// Main UI tables
var table = new Table();     // Outer table for HUD placement
var mainTable = new Table(); // Inner table for content

var worldLoaded = false;

// Called when a new world is loaded
Events.on(WorldLoadEvent, init);

function init() {
    // Remove old table if it exists
    Vars.ui.hudGroup.removeChild(table);

    // Create outer table
    table = new Table();
    table.bottom().left().margin(10);
    Vars.ui.hudGroup.addChild(table);

    // Optional panel styling
    let panel = new Table();
    panel.margin(5);
    panel.background(Styles.black5);
    table.add(panel);

    // Inner table for dynamic content
    mainTable = new Table();
    panel.add(mainTable);

    worldLoaded = true;
}

// Function to update the UI
function updateUI() {
    if (!worldLoaded) return;

    mainTable.clearChildren(); // Clear old content

    // Add plain text (empty string is fine)
    mainTable.add("Plain text goes here").left().row();
    mainTable.add("Another line of text").left().row();
}

// Optional: update UI every tick
Events.on(ClientLoadEvent, () => {
    Time.runTask(1, function tick() {
        updateUI();
        Time.runTask(1, tick); // loop every tick
    });
});
