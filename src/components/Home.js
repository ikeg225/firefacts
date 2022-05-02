import homeImage from '../images/matt-howard-eAKDzK4lo4o-unsplash.jpg';
import '../css/home.css';

export default function Home({ all, prep, eco, proto, rec, invo}) {

    return (
        <main className="mainHome">
            <div className="frontImage">
                <img src={homeImage} alt=""/>
                <div className="imageOverlay">
                    <div className="leftText">
                        <h1>FIRE<br/>FACTS</h1>
                    </div>
                    <hr />
                    <div className="rightText">
                        <h1>Find Answers To<br/>Your California<br/>Wildfire Questions.</h1>
                    </div>
                </div>
            </div>
            <div className="questionSection">
                {all && <h1 className="box">ALL TOPICS</h1>}
                {prep && <><h1 id="firePrep">FIRE PREPARATION</h1>
                <h2>How to Prepare For Evacuation?</h2>
                <p>First, make sure to follow all evacuation orders for your own safety. If you are being told to leave, it's important to do so, regardless of what you have packed. However, if you have time before your evacuation, assemble an emergency supply kit for each person in your household. Make sure to gather important documents, prescriptions, eyeglasses, and important medical equipment. Be sure to take your pets with you and do not leave them in your home with no way to escape.</p>
                <p>If you're preparing before a wildfire occurs, you can gather additional emergency supplies and create a wildfire action plan. Designate a meeting area for your family, and create a list of emergency contacts well outside of your area so you have a place to stay.</p>
                <p>To learn more about a wildfire evacuation plan, go to: <a href="https://www.readyforwildfire.org/prepare-for-wildfire/get-set/wildfire-action-plan/">readyforwildfire.org</a></p>

                <h2>What Should I Pack In An Emergency Kit For a Fire?</h2>
                <p>The basic necessities of a fire emergency kit include:</p>
                <ul>
                    <li>Water</li>
                    <li>Flashlight</li>
                    <li>Non-Perishable food</li>
                    <li>Phone and electronics chargers</li>
                    <li>Battery-powered radio</li>
                    <li>First aid kit</li>
                    <li>Extra batteries</li>
                    <li>Sanitation supplies</li>
                    <li>Copies of important documents</li>
                    <li>N95 respirators</li>
                    <li>Extra change of clothes for your climate and sturdy shoes</li>
                </ul>
                <p>If applicable:</p>
                <ul>
                    <li>Menstrual products and personal hygiene items</li>
                    <li>Prescription medications, eyeglasses, and medical equipment</li>
                    <li>Infant formula, bottles, diapers, wipes, and diaper rash cream</li>
                    <li>Pet food/ accessories and extra water for the pet</li>
                </ul>
                <p>To learn more about what to pack in an emergency supply kit, go to: <a href="https://www.ready.gov/kit">ready.gov</a></p>

                <h2>How Do I Prepare My Home For a Fire?</h2>
                <p>In order for a fire to start, it needs fuel and a source. Remember to remove flammable materials, such as dry brush and dead leaves, from around your home.</p>
                <p>It's also important to be attentive to anything that could start a flame, such as cigarette butts and burning coals.</p>
                <p>Even if you don't see a flame, it can still start a fire! For specific actions you can take to protect yourself and your neighbors, go to: <a href="https://smokeybear.com/en/prevention-how-tos/equipment-use-and-maintenance/how-to-prepare-your-home-for-wildfire">smokeybear.com</a></p>

                <h2>How Do I Know If I'm at a Higher Fire Risk?</h2>
                <p>To check if you live in a generally high-risk fire zone, use the map found here: <a href="https://kqednews.carto.com/builder/4732dc15-cfc0-4dbb-865e-371b693239d5/embed">kqednews.carto.com</a></p>
                <p>The risk of wildfire can also change daily based on the weather. High-risk areas will likely have a daily fire danger rating. To find updates on your current local fire danger rating, go to: <a href="https://www.fire.ca.gov/programs/communications/red-flag-warnings-fire-weather-watches/">fire.ca.gov</a></p></>}

                {eco && <><h1 id="fireEcology">FIRE ECOLOGY</h1>
                <h2>How Do Fires Start?</h2>
                <p>Fire only needs three things to start: fuel, oxygen, and a spark. Roughly 87-95% percent of the time, wildland fires are caused by humans.</p>
                <p>Downed power lines are the most common cause, but others include leaving campfires unattended, burning debris, setting off fireworks, improper cigarette disposal, and acts of arson. The rest of the time, fire is caused by nature through lightning, lava, or (very rarely) through spontaneous combustion of dry fuel.</p>
                <p>Dry grass covers much of California, which provides ample fuel for a blaze. Certain weather conditions such as dry heats, droughts, and high winds can feed a spark, turning it from a small flame into a big fire. For a more detailed explanation, go to: <a href="https://www.nationalgeographic.com/environment/article/wildfires">nationalgeographic.com</a> or <a href="https://www.anthropocenemagazine.org/2020/09/humans-cause-most-wildfires-that-threaten-homes-in-the-united-states/">anthropocenemagazine.org</a></p>

                <h2>Why Does California Have So Many Fires?</h2>
                <p>Fires are a natural part of California's ecosystem and many species depend on them. However, they've been increasing in number. There are 4 main reasons for the frequent fires, which are interconnected and often feed into one another:</p>
                <ul>
                    <li>Climate change exacerbates conditions already prone to fires. There is a lack of rainfall during the summer season, and the increasing temperatures dry out vegetation, making it easier to catch fire.</li>
                    <li>People are the most common cause of wildfires in California, with many being started by downed power lines.</li>
                    <li>Wildfire suppression, or the intentional extinguishing of beneficial wildfires, has led to unnatural build-ups of dry vegetation that would otherwise be burned in small, manageable fires. California is trying to combat this with controlled burns.</li>
                    <li>The Santa Ana winds are annual dry winds that blow across the state, drying out the environment and carrying sparks, causing fires to spread faster.</li>
                </ul>
                <p>For more information on the 4 main causes, go to: <a href="https://www.seattletimes.com/nation-world/why-does-california-have-so-many-wildfires-4-key-reasons/">seattletimes.com</a></p>
                <p>For more general information, particularly on the environmental causes, go to: <a href="https://www.greenmatters.com/p/why-does-california-have-so-many-wildfires/">greenmatters.com</a></p>

                <h2>How is Climate Change Related To Fires?</h2>
                <p>Climate change has increased the number and intensity of fires. Higher temperatures take water out of the air, making it easier for fires to start, and dry out vegetation, providing a lot of fuel if one does. In addition, it affects rainfall and snow pack, elongating the drying season.</p>
                <p>While California has always had fires, dry heats, and droughts, the rise in global temperatures has made it a lot worse. Recent fires are hotter, cover more area, and are harder to put out. The average annual area burned now is 5 times more than it was a few decades ago.</p>
                <p>For more information, go to: <a href="https://www.c2es.org/content/wildfires-and-climate-change/">c2es.org</a> or <a href="https://www.nationalgeographic.com/science/article/climate-change-increases-risk-fires-western-us">nationalgeographic.com</a></p>

                <h2>When is Fire Season?</h2>
                <p>California fire season classically starts in May and hits peak risk in August, through the end of the season. In Northern California, the end is typically in October, and in Southern California, November or December. However, climate change is making the season start earlier and end later.</p>
                <p>It is largely believed there is no longer a fire season, since fire risk is high year-round. Scientists theorize there are two different fire seasons entirely, separated by month and cause. The first, from June through September, is caused by drier and hotter weather, and mainly impacts forests. The second, from October through April, is caused by the Santa Ana winds, and has fast fires near urban areas.</p>
                <p>For more information, go to: <a href="https://www.frontlinewildfire.com/when-california-fire-season/">frontlinewildfire.com</a> or <a href="https://www.seattletimes.com/nation-world/why-does-california-have-so-many-wildfires-4-key-reasons/">seattletimes.com</a></p>

                <h2>What Happens to Wildlife When a Fire Happens?</h2>
                <p>When a wildfire happens, initially only the old or young, and sick or injured cannot outrun it and perish, but most deaths occur after the fire. New, open terrain, without food or shelter, gives invasive species the chance to take over.</p>
                <p>Despite the casualties, wildfires are natural and many trees depend on them. However, they can't withstand the recent, high-intensity fires, and what used to be part of a healthy ecosystem has instead started devastating it. As large areas of forest burn, it struggles to regenerate.</p>
                <p>For more information on wildlife, go to: <a href="https://www.nationalforests.org/blog/what-happens-to-wildlife-during-a-wildfire">nationalforests.org</a></p>
                <p>For more information on trees, go to: < a href="https://insideclimatenews.org/news/21122016/california-forests-wildfires-climate-change/">insideclimatenews.org</a></p>

                <h2>How Does Fire Spread?</h2>
                <p>If there are high winds (specifically Santa Ana winds), the fire is moving uphill, or there is a lot of dry vegetation, a fire will spread faster. Wildfires can move as fast as 7 mph in forests and up to 14 mph in grasslands.</p>
                <p>While that might not seem fast, it's too fast to out-run, and fire can quickly block roads, making it extremely hard to navigate and out-drive it. It's very important to evacuate when told to do so.</p>
                <p>For more information, go to: <a href="https://www.forbes.com/sites/startswithabang/2017/09/06/the-terrifying-physics-of-how-wildfires-spread-so-fast/?sh=1ce0199b7791">forbes.com</a></p>
                <p>To see an example of how fast a fire can spread, go to: <a href="https://youtu.be/hRDM3ir3l5M">youtu.be</a></p>
                <p>For a timeline of fire spread, go to: <a href="https://www.disastercompany.com/quickly-fire-spread/">disastercompany.com</a></p>

                <h2>What is "Contained"</h2>
                <p>Containment is how much of the fire that has been enclosed by a control line. A wildfire with 25% containment means there are control lines around 25% of the fire's perimeter. Contained fires are fully enclosed and not likely to spread, but may still be burning.</p>
                <p>Control lines are natural/man-made barriers used to stop a wildfire from spreading, also called firebreaks or fuel breaks. Sometimes, controlled burns are used to remove fuel before the wildfire reaches it. Controlled fires are contained and the lines have been reinforced, making spread very unlikely.</p>
                <p>For containment and control updates on current fires, go to: <a href="https://www.fire.ca.gov/incidents/">fire.ca.gov</a></p>

                <h2>How to Prevent or Stop a Fire?</h2>
                <p>Prevention limits the ability of a devastating wildfire to start. Prescribed fires get rid of dry vegetation to keep fuel from building up. Addressing climate change helps in many different ways as well. Lastly, since humans start the most fires, fire safety information campaigns and improved power line infrastructure is extremely important.</p>
                <p>For more information on prevention, go to: <a href="https://www.fire.ca.gov/programs/resource-management/resource-protection-improvement/vegetation-management-program/">fire.ca.gov</a></p>
                <p>Suppression controls the damage an active fire can cause. Dumping water on fires is well-known, but firefighting foam can also be used. Boundaries are made by targeting unburned areas. Back-burning and vegetation removal eliminate fuel sources. Spraying fire retardant and water makes fuel harder to burn.</p>
                <p>For more information on suppression, go to: <a href="https://www.enr.gov.nt.ca/en/services/wildfire-operations/suppressing-wildland-fires">enr.gov.nt.ca</a></p>

                <h2>Is There a List of Fires in California?</h2>
                <p>Information on current major wildfires can be found on <a href="https://www.fire.ca.gov/incidents/">Cal Fire's</a> website. Past incidents can be found by year under the “Incidents” tab at the top.</p></>}

                {proto && <><h1 id="fireProtocols">EMERGENCY FIRE PROTOCOLS</h1>
                <h2>What Should I Do If There Is a Wildfire Near Me?</h2>
                <p>If you can, follow all evacuation orders. If you have time, pack an emergency supply kit. N95 respirators will protect you from smoke inhalation. Fire can travel fast, so leave quickly.</p>
                <p>Take wide, main roads, since they're less likely to be blocked. In cars, keep the headlights on, windows shut, and recirculate your air rather than drawing more from outside.</p>
                <p>If you can't evacuate, call 911 and shelter in place. It's important to stay calm and gather all house members, including pets.</p>
                <p>Sheltering in a house:</p>
                <ul>
                    <li>Wet your lawn and roof with water</li>
                    <li>Fill sinks, bathtubs, and buckets with water</li>
                    <li>Turn off gas and propane to prevent an explosion</li>
                    <li>Move flammable items away from the house, especially doors and windows</li>
                    <li>Close all doors and windows but leave them unlocked</li>
                    <li>Stay inside your house</li>
                    <li>Don't go near outermost walls, doors, or windows</li>
                </ul>
                <p>Sheltering in a vehicle:</p>
                <ul>
                    <li>Park in a place as clear of vegetation as possible</li>
                    <li>Close all windows and vents</li>
                    <li>Cover yourself with a wool blanket or jacket</li>
                    <li>Lie on the floor of the vehicle</li>
                </ul>
                <p>Sheltering in the open:</p>
                <ul>
                    <li>Go to an area as clear of vegetation as possible</li>
                    <li>Find a ditch or depression on level ground, if possible</li>
                    <li>Lie face down, cover your body</li>
                </ul>

                <h2>How to Treat Burns From Fire?</h2>
                <p>If the skin is white or charred black, has a dry or waxy appearance, or if there is little to no pain, this is a very serious burn. Call 911 and urgently follow the extreme burn steps if no emergency medical aid is available.</p>
                <p>Extreme burns: Damage to all layers of skin and possibly underlying fat, muscle, and bone. Symptoms include the skin being white/charred black or waxy/dry, the burn going deep, and little to no pain: IMMEDIATELY CALL 911</p>

                <p>Treatment:</p>
                <ul>
                    <li>Protect from further burns; take special care with electrocutions</li>
                    <li>Check for breathing; if not breathing, start CPR</li>
                    <li>Remove tight items, like rings, from burn area and neck</li>
                    <li>Cover burn with cool, clean, moist cloth or bandage</li>
                    <li>Elevate burned area above the heart</li>
                    <li>Monitor closely for excessive bleeding, not breathing, and signs of shock</li>
                    <li>DO NOT submerge or run under water</li>
                    <li>DO NOT attempt to remove cloth stuck to the burn</li>
                    <li>DO NOT use fluffy cotton</li>
                </ul>
                <p>Mild burns: Occurs on layers of skin only. Symptoms include redness, pain, significant swelling, splotchy skin, blisters, and peeling</p>
                <p>Treatment:</p>
                <ul>
                    <li>Remove tight items, like rings, from burn area</li>
                    <li>Cool down burn by submerging or running under cool water or with a wet compress until pain eases</li>
                    <li>Apply lotion, moisturizer, or aloe vera to avoid drying</li>
                    <li>Cover with gauze and wrap lightly</li>
                    <li>DO NOT use ice or cold water</li>
                    <li>DO NOT use fluffy cotton or wrap tightly</li>
                    <li>DO NOT break blisters; wash out if a break occurs</li>
                </ul>
                <p>If the burn is larger than 3 inches, or is on your face, scalp, genitals, hands, feet, or major joints, get same-day medical treatment or go to urgent care. It's okay to take pain medication if needed.</p>
                <p>For more detailed information, go to: <a href="https://www.mayoclinic.org/first-aid/first-aid-burns/basics/art-20056649">mayoclinic.org</a></p>

                <h2>How To Protect Oneself From Smoke?</h2>
                <p>Wear an N95 mask. Avoid going outside or exercising as you'll inhale more smoke. When in the car, close windows and re-circulate the air. When at home, close windows and doors and stay in a room closed off from outside air. If the smoke gets too bad, you may need to evacuate.</p>
                <p>For more information, go to: <a href="https://www.cdc.gov/disasters/wildfires/duringfire.html">cdc.gov</a></p>
                <p>To check your air quality, go to: <a href="https://www.airnow.gov/">airnow.gov</a></p>

                <h2>How does Wildfire Smoke Impact Your Health?</h2>
                <p>Smoke's biggest health threat is from fine particles. They can penetrate deep into your lungs and cause a range of health problems, from burning eyes and a runny nose to aggravated chronic heart and lung diseases.</p>
                <p>Exposure to particle pollution is even linked to premature death. For more information, go to: <a href="https://www.epa.gov/pm-pollution/how-smoke-fires-can-affect-your-health">epa.gov</a></p></>}

                {rec && <><h1 id="fireRecovery">FIRE RECOVERY</h1>
                <h2>How Does the Community Recover After a Wildfire?</h2>
                <p>Once they're done dealing with the fire, CAL FIRE will help communities in many ways, including repairing road damage, installing waterbars, and addressing public safety issues. Some organizations, like the California Wildfire Relief fund, support the more intermediate and long-term recovery efforts after major fires. Recovery relies heavily on volunteers and donations. Unfortunately, public interest often moves on before the recovery is completed, causing a lack of funds and hands to provide long-term recovery.</p>
                <p>For more information, go to: <a href="https://aftertheflames.com/">https://aftertheflames.com/</a> or <a href="https://www.readyforwildfire.org/post-wildfire/who-can-help/">readyforwildfire.org</a></p>

                <h2>How To Safely Return After a Wildfire</h2>
                <p>Even though a fire is put out, the area might still be dangerous. Natural disasters like flash floods are common, buildings and trees can have unseen structural damage, and embers can still be burning under the debris. Don't return until you're told it's safe to do so, and be cautious once you do.</p>
                <p>When you get to your home, check thoroughly for gas leaks and turn off the power while you inspect everything. Avoid making any sparks. It's crucial to check every inch or your property for any embers, sparks, or hotspots. Just because you don't see anything doesn't mean it's safe. Once you've deemed the property safe, you can turn the electricity back on.</p>
                <p>Don't drink tap water until you're told it's safe and discard any food items with fire damage. If your possessions have fire damage, it is safer to discard them.</p>
                <p>Check your insurance policy for wildfire coverage and begin cleanup with the help of the government or a private contractor.</p>
                <p>For a return checklists, go to: <a href="https://www.readyforwildfire.org/post-wildfire/after-a-wildfire/">readyforwildfire.org</a> or <a href="https://www.readyforwildfire.org/post-wildfire/returning-home/">readyforwildfire.org</a></p>

                <h2>Recovery Resources?</h2>
                <p>Dealing with the aftermath of a wildfire can be a daunting task, but there are tons of people to help out!</p>
                <p>To start with you can check out these organizations!</p>
                <p>CAL FIRE: <a href="https://wildfirerecovery.caloes.ca.gov/general-info/rebuilding/">wildfirerecovery.caloes.ca.gov</a></p>
                <p>Disaster Assistance: <a href="https://www.disasterassistance.gov/">disasterassistance.gov</a></p>
                <p>Fire Adapted Network: <a href="https://fireadaptednetwork.org/recover-after-wildfire/">fireadaptednetwork.org</a></p></>}

                {invo && <><h1 id="getInvolved">GETTING INVOLVED</h1>
                <h2>How Can You Help?</h2>
                <p>If you wish to make a financial donation, you can donate to organizations like the American Red Cross, The Salvation Army, evacuations centers, and food banks. During and immediately following a fire, food and supply donations can be helpful, but be sure to check if those items are needed as they can often overwhelm relief organizations.</p>
                <p>If you are interested in a much more direct way of helping, you can volunteer to help in wildfire relief efforts. AirBNB's Open Homes matches hosts with disaster victims and relief workers to provide a place to stay. The Red Cross needs volunteers as well.</p>
                <p>To start with, here is a list of organizations in California you could donate to: <a href="https://www.nytimes.com/2020/09/18/us/help-wildfires-victims.html">nytimes.com</a></p>

                <h2>Where Can I Donate?</h2>
                <p>Donating money to the right organizations can be difficult! Charity Navigator is a great tool that you can use to identify the non-profits organizations that could best use that money. You can see a list of reputable organizations to donate to here: <a href="https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=7574">charitynavigator.org</a></p>
                <p>The California Office of the Attorney General has a registry of Charitable Trusts website available as well: <a href="https://oag.ca.gov/donations">oag.ca.gov</a></p>

                <h2>How Do I Become a Firefighter?</h2>
                <p>Becoming a firefighter takes some training and commitment. You need to be at least 18 years old and have a valid driver's license. If you are interested in becoming a volunteer firefighter, the first thing you should do is contact your local fire department. You can learn a bit more about the process, requirements, and duties for California at this website!</p>
                <p><a href="https://www.fireandrescuetraining.ca.gov/fire-academy-faqs">fireandrescuetraining.ca.gov</a></p>
                <p>If you want to learn more about how it is to be a firefighter, here is A Day in the Life of a Forest Firefighter: <a href="https://www.npr.org/templates/story/story.php?storyId=112440766">npr.org</a></p>

                <h2>Where Can I Volunteer To Help Others After a Fire?</h2>
                <p>Before volunteering yourself, you should make sure that you are safe and prepared in case of an emergency. If you are in a place affected by wildfire, you can check on a neighbor and offer to help them evacuate if needed. You can also help buy groceries or run errands for those who may need it. Here is a link to a website outlining ways to help during current disasters: <a href="https://www.californiavolunteers.ca.gov/disasters/">californiavolunteers.ca.gov</a></p>
                <p>During a disaster, the American Red Cross often seeks thousands of volunteers to help with food donations, shelter upkeep, and more throughout California. You can learn more about their volunteer opportunities and sign up here: <a href="https://www.redcross.org/volunteer/become-a-volunteer/urgent-need-for-volunteers.html">redcross.org</a></p></>}
            </div>
        </main>
    )
}